# Installation

## Docker et composer les étapes d'installation sur Ubuntu

Décomposons plus en détail ces commandes Docker et docker compose install pour Ubuntu. Voici les étapes de base que vous
devez suivre pour installer Docker et docker compose sur Ubuntu :

Installer le logiciel prérequis

Télécharger le fichier Docker GPG

Configurer le référentiel du logiciel Docker

Installez Docker avec containerd et le plugin docker compose

Valider la configuration Docker et docker compose

## Prérequis de l'exemple de configuration de Docker

Le premier ensemble de commandes d'installation Docker configure simplement votre instance Ubuntu avec les prérequis
requis :

CURL - l'utilitaire utilisé pour télécharger la clé Docker GPG

GnuPG - une implémentation gratuite d'OpenPGP pour fonctionner avec la clé Docker GPG

La commande lsb-release pour identifier la distribution Linux actuellement utilisée Prise en charge de l'autorité de
certification

```shell
sudo apt-get install curl 
sudo apt-get install gnupg 
sudo apt-get install ca-certificates 
sudo apt-get install lsb-release
```

## Configuration du référentiel Docker

Une fois les conditions préalables remplies, vous devez télécharger la clé GNU Privacy Guard de Docker, puis mettre à
jour les références d'Ubuntu dans le référentiel de logiciels Docker.

Les deux commandes suivantes créent d'abord un dossier pour contenir le fichier Docker GPG, puis téléchargent la clé
dans ce dossier.

```shell
sudo mkdir -p /etc/apt/keyrings 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

Une fois la clé téléchargée, configurez les références locales au référentiel Docker distant avec cette commande d'une
longueur intimidante :

```shell
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

## Docker et Docker composent la commande d'installation

La commande pour configurer Docker et docker compose installe en fait quatre logiciels sur Ubuntu :

DockerCE

L'interface de ligne de commande Docker CE

conteneur

Le plug-in de composition docker

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## Testez l'exemple de configuration Docker sur Ubuntu

Une fois que vous avez installé Docker et docker compose, vous pouvez émettre diverses commandes dans la fenêtre du
terminal. Les commandes populaires pour tester la configuration de Docker sur Ubuntu incluent :

```shell
sudo docker --version
docker compose version
sudo docker run hello-world
sudo docker images
sudo docker ps -a
```