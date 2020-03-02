#define ENA 5
#define ENB 6
#define IN1 7
#define IN2 8
#define IN3 9
#define IN4 11

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
		delay(20);
		stopcar(true);
}

void loop() {
  String c = {};
  c = Serial.readString();
  if (c == "f") {
    forward(true, 180);
  }
  if (c == "s") {
   stopcar(true);
	}
	Serial.println(c);
}
