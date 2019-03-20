

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static('public'))
app.use('/admin',express.static('public'))
app.use('/admin/upload',express.static('upload'))
app.use('/admin/product/upload',express.static('upload'))


