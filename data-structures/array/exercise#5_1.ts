/*

Column Name  Type
Id           int
recordDate   date
temperature  int

id id the column with unique values for this table.
There are no different rows with the same recordDate.
This table contains information about the temperature on a certain day.

Write a solution to find all dates 'id with higher temperatures compared to its previous dates (yesterday).
Return the result table in any order.
The result format is in the following example.

Example 1:
Input:
Weather Table:

id  recordDate    temperature
1   2015-01-01    10
2   2015-01-02    25
3   2015-01-03    20
4   2015-01-04    30

Output:
id
2
4

Explanation:
In 2015-01-02, the temperature was higher than the previous day (10 -> 25);
In 2015-01-04, the temperature was higher tan the previous day (20 -> 30);
*/

class WeatherData {
    public id: number; 
    public recordDate: Date;
    public temperature: number;

    constructor(id: number, recordDate: Date, temperature: number) {
        this.id = id;
        this.recordDate = recordDate;
        this.temperature = temperature;
    }
}

const weatherData1 = new WeatherData(1, new Date("2015-01-01"), 10);
const weatherData2 = new WeatherData(2, new Date("2015-01-02"), 25);
const weatherData3 = new WeatherData(3, new Date("2015-01-03"), 20);
const weatherData4 = new WeatherData(4, new Date("2015-01-04"), 30);

const weatherTable: WeatherData[] = [];
weatherTable.push(weatherData1);
weatherTable.push(weatherData2);
weatherTable.push(weatherData3);
weatherTable.push(weatherData4);

function getHigherTemperatures(weatherTable: WeatherData[]) {
    let finalArray: number [] = [];
    for(let i=1; i < weatherTable.length; i++) {
        if(weatherTable[i].temperature > weatherTable[i - 1].temperature) {
            finalArray.push(weatherTable[i].id);
        }
    }
    return finalArray;
}

console.log(getHigherTemperatures(weatherTable));