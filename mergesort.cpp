#include <iostream>
using namespace std;
int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    if (number % 2 == 0) {
        cout << number << " is even." << endl;
    } else {
        cout << number << " is odd." << endl;
    }
    cout << "Counting from 1 to " << number << ":" << endl;
    for (int i = 1; i <= number; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
