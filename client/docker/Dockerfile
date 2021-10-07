FROM node:14.17.0-buster-slim

EXPOSE 4200

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    #
    # Install git iproute2, procps, lsb-release (useful for CLI installs)
    && apt-get -y install --no-install-recommends git iproute2 procps iproute2 lsb-release ca-certificates ssh-client \
    # Install git iproute2, procps, lsb-release (useful for CLI installs)
    #
    # Installing Angular CLI
    && npm install -g @angular/cli@12 \
    && echo "export NG_CLI_ANALYTICS=ci" > /etc/profile.d/ng.sh \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog

USER node
ENV HOME /home/node
