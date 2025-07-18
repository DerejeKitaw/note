# 🐳 Docker Without Docker Desktop on WSL2/Ubuntu

**Date:** July 18, 2025  
**Author:** Setup reference log by Dereje K

---

This is a complete setup and security-hardening guide for running Docker **without Docker Desktop**, using **TLS over port 2376** for secure access in **Ubuntu (WSL2)**. It includes certificate generation, configuration, and client usage with VS Code or terminal.

---

## ✅ 1. Prerequisites

- **OS**: Ubuntu 24.04 (or compatible version) inside WSL2
- **User**: Has `sudo` access
- **Tools**:
  - `openssl`
  - `curl`, `gnupg`, `lsb-release`, `software-properties-common`

---

## 🔐 2. Generate TLS Certificates

```bash
mkdir -p ~/docker-certs
cd ~/docker-certs
```

Generate CA Key:

```bash
openssl genrsa -aes256 -out ca-key.pem 4096
```

Create self-signed certificate:

```bash
openssl req -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem
```

Generate server key and CSR:

```bash
openssl genrsa -out server-key.pem 4096
openssl req -subj "/CN=docker.local" -new -key server-key.pem -out server.csr
```

Create `extfile.cnf`:

```bash
echo subjectAltName = IP:127.0.0.1,IP:localhost > extfile.cnf
```

Sign server cert:

```bash
openssl x509 -req -days 365 -sha256 -in server.csr   -CA ca.pem -CAkey ca-key.pem -CAcreateserial   -out server-cert.pem -extfile extfile.cnf
```

Move files to Docker daemon:

```bash
sudo mkdir -p /etc/docker/certs
sudo cp server-*.pem ca.pem /etc/docker/certs/
sudo chmod 0444 /etc/docker/certs/server-cert.pem /etc/docker/certs/ca.pem
sudo chmod 0400 /etc/docker/certs/server-key.pem
```

---

## ⚙️ 3. Configure Docker Daemon for TLS

Create/edit daemon config:

```bash
sudo nano /etc/docker/daemon.json
```

Add this content:

```json
{
  "hosts": ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2376"],
  "tls": true,
  "tlsverify": true,
  "tlscacert": "/etc/docker/certs/ca.pem",
  "tlscert": "/etc/docker/certs/server-cert.pem",
  "tlskey": "/etc/docker/certs/server-key.pem"
}
```

Save and exit.

---

## 🛠️ 4. Install Docker (Without Docker Desktop)

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release software-properties-common
```

Add GPG key:

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

Add repo (Jammy for compatibility):

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg]   https://download.docker.com/linux/ubuntu jammy stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Install:

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## 🚀 5. Start Docker Daemon (manual)

```bash
sudo dockerd
```

You should see logs indicating Docker is running and listening on both `/var/run/docker.sock` and `[::]:2376`.

---

## 🔗 6. Connect to Docker Over TLS

Test from local client:

```bash
docker --tlsverify   --tlscacert ~/docker-certs/ca.pem   --tlscert ~/docker-certs/server-cert.pem   --tlskey ~/docker-certs/server-key.pem   -H=localhost:2376 version
```

✅ If successful, you’ll see both Client and Server version output.

---

## 📂 7. Persistent Docker TLS Env (Optional)

Append to `~/.bashrc`:

```bash
export DOCKER_HOST=tcp://localhost:2376
export DOCKER_TLS_VERIFY=1
export DOCKER_CERT_PATH=$HOME/docker-certs
```

Activate:

```bash
source ~/.bashrc
```

---

## 🧪 8. VS Code Docker Extension Support

In **VS Code**:
- Open Command Palette → “Docker: Add Docker Host”
- Enter: `tcp://localhost:2376`
- Set cert path when prompted: `~/docker-certs`

---

## 🛡️ 9. Security Notes

- Port **2375** is **insecure** and should never be exposed.
- Port **2376** uses **TLS** and is secure **only if certificates are valid**.
- Attacks via Docker API could give root access to your system.
- Always use TLS for remote access.

---

## 🧠 10. Tips

- Use `nano ~/.bashrc` → paste with `Ctrl+Shift+V` (in WSL).
- If `docker.sock` fails, check `sudo dockerd` log for cert issues.
- Avoid using `docker` as root when TLS is configured — prefer env vars or context setup.

---

## ✅ Final Check

Run:

```bash
docker ps
```

If configured, this should connect securely to the daemon via TLS.

---

## 💡 Notes

This setup allows:
- Full CLI and VS Code Docker usage
- No Docker Desktop overhead
- Reproducible, secure configuration for local or remote servers

