﻿#include "cg.h"

#undef main

int main(int argc, char** argv) {

    CG cg(1280,720);
    cg.decoupledMainLoop();
//    cg.startMainLoop();
    return 0;

}
