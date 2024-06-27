#Cara buat ni Projrct

Open Documencation in https://expressjs.com/ or

1. First You can Create "npm init" lalu kamu suruh melengkapi pertanyaan yang akan membantu mngenisial project kamu
2. Muncullah file baru otomatis namanya 'package.json'
3. Lalu buatlah file 'app.js' dengan kode didalamnya seperti di dokumentasi untuk menampilkan 'Hello World' di localhost/3000
4. lalu ketik "npm install express" or "npm install express --save" sama aja
5. lalu Muncullah file baru otomatis namanya 'package-lock.json' dan folder 'node-modules'

#Untuk menyimpan project express.js ini ke github maka hal yang harus dilakukan adalah:

1. menambahkan/create file '.gitignore'

2. lalu seperti biasa:
   "git init"

"git add ."

"git remote add origin git@github.com:adhamajid/MyFirst-Express.git" or sesuaikan sama nama new repo kamu

"git commit -m "pertama" "

"git branch -M main"

dan seterusnya hingga push

#Untuk mempermudah seorang tanpa restart server(ctrl+c)

buatlah/ketik command berikut:
"npm install -g nodemon"

"Set-ExecutionPolicy RemoteSigned -Scope CurrentUser"

dan menjalankan nya sudah tidak memakai perintah/command:

"node app"

tapi menggunakan:

"nodemon app"
