## Producer
### Insert producers for a topic
```
kafka-console-producer --bootstrap-server localhost:9092 --topic first_topic
```

> If topic does not exist kafka will `create it`. This is not recomended. Because default replica factor is 1. Which can be configured in `config/server.properties`  with `num.partitions=3`
```
kafka-console-producer --bootstrap-server localhost:9092 --topic new_topic
```

- Some of kafka producer default values are:
- `--producer-property acks=all`
```
kafka-console-producer --bootstrap-server localhost:9092 --topic first_topic

is equal to 

kafka-console-producer --bootstrap-server localhost:9092 --topic first_topic --producer-property acks=all
```
