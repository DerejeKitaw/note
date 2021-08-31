## to run mongodb in specific folder location

mongod --dbpath ~/data/db

## to stop running mongodb(mac) if terminal start the server close

```
Find PID of mongod process using $ top

Kill the process by $ kill <PID>
```

### mongodb localhost connection
```

```

### MongoDB password with “@” in it (For MongoDB compass)
```
// use %40 for @ 
// Example p@me for p%40me
mongoClient.connect("mongodb://username:p%40me@host:port/dbname?authSource=admin", { 
        useNewUrlParser: true
    }, function(err, db) {

    }
);
```
