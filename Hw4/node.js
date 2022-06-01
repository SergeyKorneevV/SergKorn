const fs = require(`fs-extra`);
fs.ensureDirSync('./Folder1');                              //4. Создать папку;
fs.ensureFileSync('./Folder1/Test1.txt');                   //5. Создать текстовый файл
fs.ensureDirSync('./Folder2');                              //6. создать вторую папку;
fs.moveSync('./Folder1/Test1.txt', './Folder2/Test1.txt');  //7. переместить файл из первой папки во вторую;
fs.ensureDirSync('./Folder3');                              //8. Создать третью папку;
fs.copySync('./Folder2/Test1.txt', './Folder3/Test1.txt');  //9. Скопировать файл из второй папки в третью;
fs.removeSync('./Folder1/Test1.txt');                       //10. Удалить файл1;
fs.removeSync('./Folder2/Test1.txt');                       //10. Удалить файл2;
fs.removeSync('./Folder3');                                 //10. Удалить папку3;
fs.removeSync('./Folder2');                                 //10. Удалить папку2;
fs.removeSync('./Folder1');                                 //10. Удалить папку1;