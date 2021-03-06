
//....Para inserta un documento o un conjunto de documentos....// 
//....disponemos de los métodos: insertOne: Inserta un documento....//
//....en una colección. insertMany: Inserta múltiples documentos....//
//....en una colección.... //


db.coche.insertMany([

    {
        _id: 1,
        Marca: "Ferrari",
        Modelo: "GTC4",
        Año: 2016,
        Precio: 265708
    },
    
    {
        _id: 2,
        Marca: "Renault",
        Modelo: "Clio",
        Año: 1990,
        Precio: 7000
    },
    
    {
        _id: 3,
        Marca: "Citroen",
        Modelo: "Cactus",
        Año: 2016,
        Precio: 10000
    },
    
    {
        _id: 4,
        Marca: "Lamborghini",
        Modelo: "Huracan",
        Año: 2013,
        Precio: 300000
    },
    
    {
        _id: 5,
        Marca: "Wolsvagen",
        Modelo: "Golf",
        Año: 2000,
        Precio: 12000
    },
    
    {
        _id: 6,
        Marca: "Wolsvagen",
        Modelo: "Polo",
        Año: 2002,
        Precio: 10000
    },

    ])

//....Probando el find.... //

db.coche.find()  

db.coche.find (  {  _id :  3  }  )

db.coche.find (  {  _id :  5  }  )

db.coche.find (  {  _id :  2  }  )

db.coche.find( { "Marca": "Wolsvagen" } )

db.coche.find( { "Marca": "Lamborghini" } )

db.coche.find( { "Modelo": "Cactus" } )

db.coche.find( { "Modelo": "Clio" } )






