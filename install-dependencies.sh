echo "Installing local MongoDB instance"
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list
apt update
apt install -y mongodb-org
service mongod start
cat /var/log/mongodb/mongod.log

cd client
yarn
cd ../server
yarn
cd ..
yarn