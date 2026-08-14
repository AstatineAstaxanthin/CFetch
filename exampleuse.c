// for mobile
#include <stdio.h>
#include <stdlib.h>

int main() {
    char* hook = "hook address";

// JSON
// {"content":"infos that u wanna send"}
    char* payload = "{\"content\": \"infos that u wanna send\"}";

    char cmd[2048];
    sprintf(cmd, "node ~/httpget.js \"%s\" \"POST\" '%s'", hook, payload);

    system(command);

    return 0;
}
