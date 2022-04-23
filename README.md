<a href="https://gitmoji.carloscuesta.me">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>

# Informações sobre a imagem do Clock Love no DockerHub

A imagem está disponível na URL a seguir.

https://hub.docker.com/repository/docker/borelanjo/clocklove

O Clock Love é uma aplicação Ionic

## Como usar a imagem?

* Baixe a imagem do DockerHub:

```sh
docker pull borelanjo/clocklove:1.1.0
```

* Crie um conteiner com uma das formas abaixo.

a) Conteiner em background:

```sh
docker run -d --name=clocklove -p 80:80 borelanjo/clocklove:1.1.0
```

Caso deseje executar em outra porta:

```sh
docker run -d --name=clocklove -p [portapreferencia]:80 borelanjo/clocklove:1.1.0
```

b) Acesse a aplicação:
Abra o navegador de sua preferência e rode no endereço:

```
http://localhost
```

ou

```
http://localhost:[portapreferencia]
```


## Compile a imagem Docker a partir do DockerFile.

* Baixe o código do repositório Git.

```sh
git clone git@github.com:borelanjo/clocklove.git
```

```sh
cd clocklove
docker build --pull --rm -t borelanjo/clocklove:1.1.0 "."
```