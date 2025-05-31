---
title: Backend Stack
---

ansiblesemaphore
authentik
bind9
cadvisor
checkmk
clamav
dockge
duplicati
factory
gitea
gitlab
gitlab-runner
grafana
heimdall
homeassistant
homepage
homer
influxdb
loki
mariadb
nextcloud
nginx
nginxproxymanager
nodeexporter
nvidiadgcm
nvidiasmi
openwebui
passbolt
pihole
portainer
postgres
prometheus
promtail
swag
teleport
traefik
twingate_connector
uptimekuma
wazuh

# ordered
1. nginx
2. nginxproxymanager or traefik (choose one reverse proxy)
3. mariadb or postgres (choose your preferred database)
4. portainer or dockge (container management)
5. grafana
6. prometheus
7. nodeexporter
8. cadvisor
9. influxdb
10. loki
11. promtail
12. uptimekuma
13. checkmk
14. wazuh
15. clamav
16. pihole
17. authentik
18. teleport
19. twingate_connector
20. swag
21. ansiblesemaphore
22. duplicati
23. gitlab or gitea (choose your preferred Git service)
24. gitlab-runner (if using GitLab)
25. factory
26. passbolt
27. nextcloud
28. homeassistant
29. openwebui
30. nvidiadgcm
31. nvidiasmi
32. heimdall
33. homepage
34. homer