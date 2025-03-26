let express = require("express");
const TaskModel = require("../models/model");
// let app = express();

function getTime(){
    const now = new Date();
    const timeBD = now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Dhaka', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
        
    });
    return timeBD;
}

function getDate(){
    const now = new Date();
    const dateBD = now.toLocaleDateString('en-GB', { 
        timeZone: 'Asia/Dhaka', 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric'
    });
    dateBD.replace(/\//g, ':')
    return dateBD;

}

 // Example output: "18:45:30"

let getData = async(req,res)=>{
    let Data = await TaskModel.find();
    // console.log(Data);
    res.send(Data);
}
let addData = async(req,res)=>{
    let  sendingData =TaskModel({
        username: req.body.username,
        task: req.body.task,
        doneOrNot: false,
        time: getTime(),
        date: getDate(),
    })
    sendingData.save();
    res.send("Data Added");
}
let delData = async(req,res)=>{
    let id = req.body.id;
    let delData = await TaskModel.findByIdAndDelete(id);
    res.send("Data Deleted");
}
let updateData = async(req,res)=>{
    let id = req.body.id;
    let task = req.body.task;
    let time = getTime();
    let date = getDate();

    let data = await TaskModel.findByIdAndUpdate(id,{$set:{
        task: task,
        time: time,
        date: date
    }});
    res.send("Data Updated");
}

module.exports = {getData,updateData,delData,addData};