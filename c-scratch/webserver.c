#include <arpa/inet.h>
#include <errno.h>
#include <stdio.h>
#include <stdlib.h> 
#include <string.h>
#include <sys/socket.h>
#include <unistd.h>
#include <uuid/uuid.h>
#include <pthread.h>

#define PORT 8080
#define BUFFER_SIZE 1024


void *handle_client(void *arg) 
{
  int newsockfd = *((int *)arg);
  free(arg);
  pthread_detach(pthread_self());

  char buffer[BUFFER_SIZE];
  char *header = "HTTP/1.0 200 OK\r\n"
            "Server: webserver-c\r\n"
            "Content-type: text/html\r\n\r\n";

  
     // Read from the socket
  int valread = read(newsockfd, buffer, BUFFER_SIZE);
  if (valread < 0)
  {
    perror("webserver (read)");
    close(newsockfd);
    return NULL;
  }
  
  
  // Write to the socket
  uuid_t uuid;
  char uuid_str[37];
  uuid_generate(uuid);
  uuid_unparse(uuid, uuid_str);
  
  size_t resp_size = strlen(header) + strlen(uuid_str) + 1;
  char *resp = malloc(resp_size);
  
  if (resp == NULL)
  {
    perror("Malloc failed (resp)");
    close(newsockfd);
    return NULL;
  }

  snprintf(resp, resp_size, "%s%s", header, uuid_str);

  int valwrite = write(newsockfd, resp, strlen(resp));
  if (valwrite < 0){
    perror("webserver (write)");
  }
  
  free(resp);
  close(newsockfd);

  return NULL;
}

int main() 
{
  // Create socket
  int sockfd = socket(AF_INET, SOCK_STREAM, 0);
  if (sockfd == -1)
  {
    perror("webserver (socket)");
    return 1;
  }
  printf("socket created!\n");

  // Create the address to bind the socket to
  struct sockaddr_in host_addr;
  int host_addrlen = sizeof(host_addr);

  // IPv4
  host_addr.sin_family = AF_INET;
  host_addr.sin_port = htons(PORT);
  host_addr.sin_addr.s_addr = htonl(INADDR_ANY);

  if (bind(sockfd, (struct sockaddr *)&host_addr, host_addrlen) != 0)
  {
    perror("webserver (bind)");
    return -1;
  }
  printf("socket successfully bound to address\n");

  // Listen for connections
  if (listen(sockfd, SOMAXCONN) != 0)
  {
    perror("webserver (listen)");
    return 1;
  }
  printf("server listening for connections");

  for (;;)
  {
    int *newsockfd_ptr = malloc(sizeof(int));
    if (newsockfd_ptr == NULL) {
        perror("Malloc failed");
        continue;
    }


    *newsockfd_ptr = accept(sockfd, (struct sockaddr *)&host_addr, (socklen_t *)&host_addrlen);
    if (*newsockfd_ptr < 0)
    {
      perror("webserver (accept)");
      free(newsockfd_ptr);
      continue;
    }

    pthread_t client_thread;
    if(pthread_create(&client_thread, NULL, handle_client, newsockfd_ptr) != 0)
    {
      perror("Failed to create thread");
      free(newsockfd_ptr);
    }
  }
  
  return 0;
}