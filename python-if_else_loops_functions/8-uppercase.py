#!/usr/bin/python3

def uppercase(str):
    result = ""
    for ch in str:
        if 'a' <= ch <= 'z':
            result += chr(ord(ch) - 32)
        else:
            result += ch
    print("{}".format(result))


uppercase("Best School 98 Battery street")
