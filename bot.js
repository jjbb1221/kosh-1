const Discord = require('discord.js');
const client = new Discord.Client()
const prefix = ("$")
client.on("ready", () => {
    console.log("[KOSH_PROCESS] [KOSH_BOT] Online!")
client.user.setPresence({ game: { name: '[$cmds]', type: 1 } });
});

client.on("ready", () => {
public class PairOfDice {

        private int die1;   // Number showing on the first die.
        private int die2;   // Number showing on the second die.

        public PairOfDice() {
                // Constructor.  Rolls the dice, so that they initially
                // show some random values.
            roll();  // Call the roll() method to roll the dice.
        }

        public void roll() {
                // Roll the dice by setting each of the dice to be
                // a random number between 1 and 6.
            die1 = (int)(Math.random()6) + 1;
            die2 = (int)(Math.random()6) + 1;
        }

        public int getDie1() {
              // Return the number showing on the first die.
           return die1;
        }

        public int getDie2() {
              // Return the number showing on the second die.
           return die2;
        }

        public int getTotal() {
              // Return the total showing on the two dice.
           return die1 + die2;
        }

     }  // end class PairOfDice
//ill get to work on the flip coin rn
//Im using Java script as it is the best for creating instances by the way
//Here is the 8 ball
import java.util.Random;

public class Magic8Ball
{
    public static void main ( String[] args )
    {
        Random r = new Random();

        int choice = 1 + r.nextInt(15);
        String response = "";

        if ( choice == 1 )
            response = "It is certain";
        else if ( choice == 2 )
            response = "It is decidedly so";
        else if ( choice == 3 )
            response = "Without a doubt";
        else if ( choice == 4 )
            response = "Yes - definitely";
        else if ( choice == 5 )
            response = "You may rely on it";
        else if ( choice == 6 )
            response = "As I see it, yes";
        else if ( choice == 7 )
            response = "Most likely";
        else if ( choice == 8 )
            response = "Outlook good";
        else if ( choice == 9 )
            response = "Signs point to yes";
        else if ( choice == 10 )
            response = "Yes";
        else if ( choice == 11 )
            response = "Reply hazy, try again";
        else if ( choice == 12 )
            response = "Ask again later";
        else if ( choice == 13 )
            response = "Better not tell you now";
        else if ( choice == 14 )
            response = "Cannot predict now";
        else if ( choice == 15 )
            response = "Concentrate and ask again";
        else 
            response = "8-BALL ERROR!";

        System.out.println( "MAGIC 8-BALL SAYS: " + response );
    }
}
});
client.login(process.env.BOT_TOKEN);
