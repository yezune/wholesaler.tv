docker exec -it $(docker ps | grep server | awk '{ print $1 }') /bin/sh -c 'node ./seeders/games-seeder.js'
docker exec -it $(docker ps | grep server | awk '{ print $1 }') /bin/sh -c 'node ./seeders/users-seeder.js'
docker exec -it $(docker ps | grep server | awk '{ print $1 }') /bin/sh -c 'node ./seeders/bank-seeder.js'
