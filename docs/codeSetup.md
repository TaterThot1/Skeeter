# Code Setup

This will cover a more detailed set of instructions to setting up the code. Starting in the index.js file you need to look for...

```
const client = new CommandoClient({
	commandPrefix: '%',
	owner: 'Your_Id', //put your id here
});
```

So firstly you need to copy your id. Your id should be 18 digits long something like this *123456789012345678*

then paste your id in the code

```
const client = new CommandoClient({
	commandPrefix: '%',
	owner: '123456789012345678', //put your id here
});
```

Now moving on to the config.js file look for...

```
{
"prefix": "%",
"token": "Sample_Token" //put your bot token here
}
```
next copy your bots token from the discord developer page and paste it


***Sample_Token is just a place holder, tokens are much longer with a mix of numbers and letters.***
