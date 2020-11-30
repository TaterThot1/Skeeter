# Skeeter
Discord bot with simple and easy setup.

only thing you need to change things in is [config.json](https://github.com/TaterThot1/Skeeter/blob/main/config.json)

```
{
"prefix": "%",
"token": "Bot_Token",
"logName" : "Log_Channel_Name",
"greet" : "Welcome_Channel_Name",
"roleName1" : "Muted",
"roleName2" : "Main_Role_1",
"roleName3" : "Main_Role_2",
"roleName4" : "Main_Role_3",
"staffRole" : "Staff_Role",
"Your_ID" : "Your_Account_ID",
"Status" : "Moderators"
}
```

## Code Setup
After installing the zip file and extracting it go to the *config.json* file

*Ps. if the line was `"1" : "2",` you will change the value of 2 only and that goes for all the lines in the actual code.*
##### Step 1 of 8
First step is to change your prefix this is by default *%* but you can change it 

`"prefix": "%",`
##### Step 2 of 8
Next we will add our bot token which can be found on the discord developer appliction page. Simply just make an application and go to bot and copy the token and paste it in the code.

`"token": "Bot_Token",`
##### Step 3 of 8
Now we neeed to label the welcome and log channels. All you need to type is the name of the channels in the corresponding line.

*Log-*

`"logName" : "Log_Channel_Name",`

*Welcome-*

`"greet" : "Welcome_Channel_Name",`
##### Step 4 of 8
Now you need to add the name of your mute role.

`"roleName1" : "Muted",`
##### Step 5 of 8
Next we need to label our main roles. Make sure the @everyone role doesn't have speaking perms in channels, instead have at least one custom role that has the perms to speak

```
"roleName2" : "Main_Role_1",
"roleName3" : "Main_Role_2",
"roleName4" : "Main_Role_3",
```

Now if you only have one main role just add it to all three lines and it should still work. if you have more than 3 main roles you have to edit the mute command a bit.
##### Step 6 of 8
Then just put the name of your staff role.

`"staffRole" : "Staff_Role",`
##### Step 7 of 8
The next step is to add your account id which is a 12 number string.|

`"Your_ID" : "Your_Account_ID",`
##### Step 8 0f 8
The last step is optional and it just changes the bots presence

`"Status" : "Moderators"`
## Starting The Bot
*linux*

You must have npm and node.js installed.

#### Step 1- Installing the Dependencies
Change your file directory in you terminal to Skeeter-main

Then use command prompt `npm i discord.js` then `npm i discordjs/Commando`

#### Step 2- Starting the Bot
Staying in the Skeeter-main directory

Use the command prompt `node index.js` 
