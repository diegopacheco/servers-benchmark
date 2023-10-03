#!/usr/bin/bash


# Check if the OS is Arch Linux
if [ -f /etc/os-release ]; then
    source /etc/os-release
    if [ "$ID" == "arch" ] || [ "$ID_LIKE" == "arch" ]; then
        # Install GHC, cabal-install, and cabal on Arch Linux
        sudo pacman -Syu --noconfirm cabal ghc cabal-install
        exit 0
    fi
fi

sudo apt install -y cabal ghc cabal-install