// for mobile(termux)

#include <stdio.h>
#include <stdlib.h>

int main() {
    system("node httpget.js \"https://jsonplaceholder.typicode.com/posts/1\" \"GET\"");
    
    return 0;
}
