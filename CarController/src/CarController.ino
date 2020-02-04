#define C_LEFT 'l'
#define C_RIGHT 'r'
#define C_FORWARD 'f'
#define C_BACK 'b'

bool start = false;
unsigned int commandsSize = 0;
char commands[100];

// put your setup code here, to run once:
void setup() {

}

// put your main code here, to run repeatedly:
void loop() {

  // when you received all informations from user
  if (received) {
    //init commands array
    // set commandsSize

  // everything is ok, car can move
  } else if (start) {
   for (int i = 0; i < commandsSize; i++) {
    switch(commandsSize[i]) {
      case C_LEFT:
        left();
        break;
       case C_RIGHT:
        right();
        break;
       case C_FORWARD:
        forward();
        break;
       case C_BACK:
        back();
        break;
    }
   }
  }
}

void forward()
{
  motor1.setSpeed(255);
  motor1.run(FORWARD);
  motor2.setSpeed(255);
  motor2.run(FORWARD); 
  motor3.setSpeed(255);
  motor3.run(FORWARD); 
  motor4.setSpeed(255);
  motor4.run(FORWARD); 
}

void back()
{
  motor1.setSpeed(255);
  motor1.run(BACKWARD);
  motor2.setSpeed(255);
  motor2.run(BACKWARD);
  motor3.setSpeed(255); 
  motor3.run(BACKWARD);
  motor4.setSpeed(255);
  motor4.run(BACKWARD);
}

void left()
{
  motor1.setSpeed(255);
  motor1.run(BACKWARD);
  motor2.setSpeed(255); 
  motor2.run(BACKWARD);
  motor3.setSpeed(255); 
  motor3.run(FORWARD); 
  motor4.setSpeed(255); 
  motor4.run(FORWARD);
}

void right()
{
  motor1.setSpeed(255);
  motor1.run(FORWARD);
  motor2.setSpeed(255); 
  motor2.run(FORWARD); 
  motor3.setSpeed(255);
  motor3.run(BACKWARD); 
  motor4.setSpeed(255); 
  motor4.run(BACKWARD); 
} 

void Stop()
{
  motor1.setSpeed(0);
  motor1.run(RELEASE);
  motor2.setSpeed(0); 
  motor2.run(RELEASE); 
  motor3.setSpeed(0); 
  motor3.run(RELEASE);
  motor4.setSpeed(0); 
  motor4.run(RELEASE); 
}
