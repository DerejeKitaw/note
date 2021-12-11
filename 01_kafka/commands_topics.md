## Topics
### Create topics 
> with 1 partition
```
kafka-topics --create --partitions 1 --replication-factor 1 --bootstrap-server localhost:9092 --topic first_topic
```
> with 3 partition
```
kafka-topics --bootstrap-server localhost:9092 --create --partitions 3 --replication-factor 1 --topic second_topic
```
### List Topics
```
kafka-topics --bootstrap-server localhost:9092 --list
```
### Detail about topics
```
kafka-topics --bootstrap-server localhost:9092 --describe
```
### Delete a topics
```
kafka-topics --bootstrap-server localhost:9092 --delete --topic seconed_topic
```
