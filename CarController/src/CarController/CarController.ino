#define ENA 5
#define ENB 6
#define IN1 7
#define IN2 8
#define IN3 9
#define IN4 11
// gospeed = 180 - turn_delay = 340 - godelay = 300
#define TURN_DELAY 400
#define GO_DELAY 300
#define SPEED_GO 150
#define SPEED_TURN 50

#define LED_Pin 13
void setup() {
  Serial.begin(9600);
}

void stopcar(bool debug = false)
{
  digitalWrite(ENA, LOW);
  digitalWrite(ENB, LOW);
  if (debug)
    Serial.println("Stop!");
}

void forward(bool debug, int16_t in_carSpeed)
{

  analogWrite(ENA, in_carSpeed);
  analogWrite(ENB, in_carSpeed);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  if (debug)
    Serial.println("Go forward!");
  delay(GO_DELAY);
  stopcar(true);
}

void back(bool debug, int16_t in_carSpeed)
{

  analogWrite(ENA, in_carSpeed);
  analogWrite(ENB, in_carSpeed);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  if (debug)
    Serial.println("Go back!");
  delay(GO_DELAY);
  stopcar(true);
}

void left(bool debug, int16_t in_carSpeed)
{

  analogWrite(ENA, 250);
  analogWrite(ENB, 250);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);

  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  if (debug)
    Serial.println("Go left!");
  delay(TURN_DELAY);
  stopcar(true);
}

void right(bool debug, int16_t in_carSpeed)
{
  analogWrite(ENA, 250);
  analogWrite(ENB, 250);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  if (debug)
    Serial.println("Go right!");
  delay(TURN_DELAY);
  stopcar(true);
}

void loop() {
  if (Serial.available() > 0) {
  String c = {};
  c = Serial.readString();
  int i = 0;
  while (i < c.length()) {
  if (Serial.available() > 0 && Serial.readString() == "s") {
     stopcar(true);
     break;
  }
  if (c[i] == 'f') {
    forward(true, SPEED_GO);
  }
  if (c[i] == 'r') {
    right(true, SPEED_TURN);
  }
  if (c[i] == 'l') {
    left(true, SPEED_TURN);
  }
  if (c[i] == 's') {
    stopcar(true);
  }
  if (c[i] == 'b') {
    back(true, SPEED_GO);
  }
  Serial.println(c);
  delay(1000);
  i++;
  }
}
}
