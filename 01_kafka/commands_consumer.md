## Consumer
### Stream topic
```
kafka-console-consumer --bootstrap-server localhost:9092 --topic first_topic
```
> The above code return nothing because kafka doesnt read all topics. It only reads from that point when you launch it and will only intercept the new messages. Plus kafka will create consume group behind the scene `console-consume-10457`(console-consume-randomNumber)

> So lets lunch producer
```
kafka-console-producer --bootstrap-server localhost:9092 --topic first_topic
```
> See the result in the consumer
### Read all topics
```
kafka-console-consumer --bootstrap-server localhost:9092 --topic first_topic --from-beginning
```
## Consumer group mode
```
kafka-console-consumer --bootstrap-server localhost:9092 --topic first_topic --group my-first-application
```
> To read all messages from the begining use `--from-beginning`
> New group will have access to all the message even consumed by another group 

## List all consumer groups
```
kafka-consumer-groups --bootstrap-server localhost:9092 --list
```
## To see what topic is consumed by the specific consumer groups, also to list current consumer-id, host and client-id
```
kafka-consumer-groups --bootstrap-server localhost:9092 --describe --group my-first-application
```
## We can decide where kafka start reading data by using offset(--reset-offset) with (--to-datetime,--by-period,--to-earliest,.....
```
kafka-consumer-groups --bootstrap-server localhost:9092 --group my-first-application --reset-offsets --to-earliest --execute --topic first_topic
```

