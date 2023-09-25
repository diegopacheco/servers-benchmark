package com.mayer;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.notNullValue;

@QuarkusTest
public class UUIDResourceTest {

    @Test
    public void testUUIDEndpoint() {
        given()
          .when().get("/uuid")
          .then()
             .statusCode(200)
             .body(notNullValue());
    }

}