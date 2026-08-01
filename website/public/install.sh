#!/bin/sh
# Blyx Programming Language Installer
# https://blyx-lang.space
# Created by Rahul Chaube
# Usage: curl -sSf https://blyx-lang.space/install.sh | sh

set -e

BLYX_VERSION="0.1.0-alpha"
BLYX_INSTALL_DIR="${BLYX_HOME:-$HOME/.blyx}"
BLYX_BIN_DIR="$BLYX_INSTALL_DIR/bin"

echo "Installing Blyx $BLYX_VERSION..."
echo "Created by Rahul Chaube — https://blyx-lang.space"
echo ""

# Detect OS and architecture
OS="$(uname -s)"
ARCH="$(uname -m)"

case "$OS" in
    Linux)
        case "$ARCH" in
            x86_64) TARGET="x86_64-unknown-linux-gnu" ;;
            aarch64) TARGET="aarch64-unknown-linux-gnu" ;;
            *) echo "Unsupported architecture: $ARCH"; exit 1 ;;
        esac
        ;;
    Darwin)
        case "$ARCH" in
            x86_64) TARGET="x86_64-apple-darwin" ;;
            arm64) TARGET="aarch64-apple-darwin" ;;
            *) echo "Unsupported architecture: $ARCH"; exit 1 ;;
        esac
        ;;
    MINGW*|CYGWIN*|MSYS*)
        TARGET="x86_64-pc-windows-msvc"
        ;;
    *)
        echo "Unsupported OS: $OS"
        exit 1
        ;;
esac

RELEASE_URL="https://github.com/Blyx-lang-space/blyx/releases/download/v$BLYX_VERSION"
ARCHIVE="blyx-$TARGET.tar.gz"
DOWNLOAD_URL="$RELEASE_URL/$ARCHIVE"

echo "Target: $TARGET"
echo "Downloading from: $DOWNLOAD_URL"
echo ""

# Create install directory
mkdir -p "$BLYX_BIN_DIR"

# Download and extract
if command -v curl > /dev/null 2>&1; then
    curl -sSfL "$DOWNLOAD_URL" | tar -xz -C "$BLYX_BIN_DIR"
elif command -v wget > /dev/null 2>&1; then
    wget -qO- "$DOWNLOAD_URL" | tar -xz -C "$BLYX_BIN_DIR"
else
    echo "Error: curl or wget is required"
    exit 1
fi

echo ""
echo "✓ Blyx $BLYX_VERSION installed to $BLYX_BIN_DIR"
echo ""
echo "Add Blyx to your PATH:"
echo "  export PATH=\"\$PATH:$BLYX_BIN_DIR\""
echo ""
echo "Or add this to your ~/.bashrc / ~/.zshrc:"
echo "  export PATH=\"\$PATH:\$HOME/.blyx/bin\""
echo ""
echo "Verify installation:"
echo "  blyxc --version"
echo "  blyxpkg --version"
echo ""
echo "Get started: https://blyx-lang.space/learn"
echo "GitHub: https://github.com/Blyx-lang-space/blyx"
