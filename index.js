console.log("here");

const astoriaData = [
    {
        "Date": "2020-06-29",
        "actual": 2,
        "yhat_lower": -12,
        "yhat_upper": 71,
        "yhat": 31
    },
    {
        "Date": "2020-06-30",
        "actual": 27,
        "yhat_lower": -10,
        "yhat_upper": 76,
        "yhat": 33
    },
    {
        "Date": "2020-07-01",
        "actual": 29,
        "yhat_lower": -14,
        "yhat_upper": 68,
        "yhat": 27
    },
    {
        "Date": "2020-07-02",
        "actual": 156,
        "yhat_lower": 6,
        "yhat_upper": 87,
        "yhat": 47
    },
    {
        "Date": "2020-07-03",
        "actual": 39,
        "yhat_lower": 5,
        "yhat_upper": 88,
        "yhat": 47
    },
    {
        "Date": "2020-07-04",
        "actual": 15,
        "yhat_lower": -23,
        "yhat_upper": 59,
        "yhat": 18
    },
    {
        "Date": "2020-07-05",
        "actual": 9,
        "yhat_lower": -37,
        "yhat_upper": 46,
        "yhat": 4
    },
    {
        "Date": "2020-07-06",
        "actual": 27,
        "yhat_lower": -2,
        "yhat_upper": 79,
        "yhat": 39
    },
    {
        "Date": "2020-07-07",
        "actual": 20,
        "yhat_lower": 0,
        "yhat_upper": 85,
        "yhat": 41
    },
    {
        "Date": "2020-07-08",
        "actual": 36,
        "yhat_lower": -4,
        "yhat_upper": 79,
        "yhat": 35
    },
    {
        "Date": "2020-07-09",
        "actual": 164,
        "yhat_lower": 11,
        "yhat_upper": 101,
        "yhat": 55
    },
    {
        "Date": "2020-07-10",
        "actual": 60,
        "yhat_lower": 13,
        "yhat_upper": 96,
        "yhat": 54
    },
    {
        "Date": "2020-07-11",
        "actual": 34,
        "yhat_lower": -13,
        "yhat_upper": 66,
        "yhat": 25
    },
    {
        "Date": "2020-07-12",
        "actual": 32,
        "yhat_lower": -32,
        "yhat_upper": 51,
        "yhat": 11
    },
    {
        "Date": "2020-07-13",
        "actual": 40,
        "yhat_lower": 3,
        "yhat_upper": 86,
        "yhat": 46
    },
    {
        "Date": "2020-07-14",
        "actual": 61,
        "yhat_lower": 4,
        "yhat_upper": 88,
        "yhat": 47
    },
    {
        "Date": "2020-07-15",
        "actual": 41,
        "yhat_lower": 0,
        "yhat_upper": 82,
        "yhat": 41
    },
    {
        "Date": "2020-07-16",
        "actual": 183,
        "yhat_lower": 13,
        "yhat_upper": 101,
        "yhat": 60
    },
    {
        "Date": "2020-07-17",
        "actual": 92,
        "yhat_lower": 18,
        "yhat_upper": 103,
        "yhat": 60
    },
    {
        "Date": "2020-07-18",
        "actual": 35,
        "yhat_lower": -7,
        "yhat_upper": 72,
        "yhat": 31
    },
    {
        "Date": "2020-07-19",
        "actual": 51,
        "yhat_lower": -25,
        "yhat_upper": 58,
        "yhat": 16
    },
    {
        "Date": "2020-07-20",
        "actual": 51,
        "yhat_lower": 9,
        "yhat_upper": 94,
        "yhat": 51
    },
    {
        "Date": "2020-07-21",
        "actual": 35,
        "yhat_lower": 10,
        "yhat_upper": 95,
        "yhat": 52
    },
    {
        "Date": "2020-07-22",
        "actual": 21,
        "yhat_lower": 4,
        "yhat_upper": 88,
        "yhat": 46
    },
    {
        "Date": "2020-07-23",
        "actual": 159,
        "yhat_lower": 23,
        "yhat_upper": 108,
        "yhat": 65
    },
    {
        "Date": "2020-07-24",
        "actual": 77,
        "yhat_lower": 19,
        "yhat_upper": 106,
        "yhat": 65
    },
    {
        "Date": "2020-07-25",
        "actual": 32,
        "yhat_lower": -7,
        "yhat_upper": 78,
        "yhat": 36
    },
    {
        "Date": "2020-07-26",
        "actual": 30,
        "yhat_lower": -19,
        "yhat_upper": 63,
        "yhat": 22
    },
    {
        "Date": "2020-07-27",
        "actual": 37,
        "yhat_lower": 13,
        "yhat_upper": 100,
        "yhat": 56
    },
    {
        "Date": "2020-07-28",
        "actual": 31,
        "yhat_lower": 16,
        "yhat_upper": 99,
        "yhat": 58
    },
    {
        "Date": "2020-07-29",
        "actual": 38,
        "yhat_lower": 13,
        "yhat_upper": 97,
        "yhat": 52
    },
    {
        "Date": "2020-07-30",
        "actual": 162,
        "yhat_lower": 29,
        "yhat_upper": 112,
        "yhat": 72
    },
    {
        "Date": "2020-07-31",
        "actual": 77,
        "yhat_lower": 30,
        "yhat_upper": 111,
        "yhat": 71
    },
    {
        "Date": "2020-08-01",
        "actual": 30,
        "yhat_lower": 0,
        "yhat_upper": 82,
        "yhat": 43
    },
    {
        "Date": "2020-08-02",
        "actual": 22,
        "yhat_lower": -14,
        "yhat_upper": 71,
        "yhat": 29
    },
    {
        "Date": "2020-08-03",
        "actual": 35,
        "yhat_lower": 25,
        "yhat_upper": 108,
        "yhat": 64
    },
    {
        "Date": "2020-08-04",
        "actual": 53,
        "yhat_lower": 20,
        "yhat_upper": 107,
        "yhat": 66
    },
    {
        "Date": "2020-08-05",
        "actual": 34,
        "yhat_lower": 21,
        "yhat_upper": 104,
        "yhat": 60
    },
    {
        "Date": "2020-08-06",
        "actual": 160,
        "yhat_lower": 38,
        "yhat_upper": 124,
        "yhat": 80
    },
    {
        "Date": "2020-08-07",
        "actual": 88,
        "yhat_lower": 40,
        "yhat_upper": 125,
        "yhat": 80
    },
    {
        "Date": "2020-08-08",
        "actual": 36,
        "yhat_lower": 8,
        "yhat_upper": 95,
        "yhat": 51
    },
    {
        "Date": "2020-08-09",
        "actual": 23,
        "yhat_lower": -7,
        "yhat_upper": 79,
        "yhat": 37
    },
    {
        "Date": "2020-08-10",
        "actual": 57,
        "yhat_lower": 30,
        "yhat_upper": 114,
        "yhat": 72
    },
    {
        "Date": "2020-08-11",
        "actual": 41,
        "yhat_lower": 32,
        "yhat_upper": 113,
        "yhat": 73
    },
    {
        "Date": "2020-08-12",
        "actual": 66,
        "yhat_lower": 25,
        "yhat_upper": 110,
        "yhat": 67
    },
    {
        "Date": "2020-08-13",
        "actual": 167,
        "yhat_lower": 47,
        "yhat_upper": 130,
        "yhat": 86
    },
    {
        "Date": "2020-08-14",
        "actual": 88,
        "yhat_lower": 45,
        "yhat_upper": 131,
        "yhat": 86
    },
    {
        "Date": "2020-08-15",
        "actual": 33,
        "yhat_lower": 17,
        "yhat_upper": 99,
        "yhat": 57
    },
    {
        "Date": "2020-08-16",
        "actual": 34,
        "yhat_lower": 0,
        "yhat_upper": 83,
        "yhat": 42
    },
    {
        "Date": "2020-08-17",
        "actual": 62,
        "yhat_lower": 36,
        "yhat_upper": 120,
        "yhat": 76
    },
    {
        "Date": "2020-08-18",
        "actual": 71,
        "yhat_lower": 34,
        "yhat_upper": 119,
        "yhat": 76
    },
    {
        "Date": "2020-08-19",
        "actual": 53,
        "yhat_lower": 29,
        "yhat_upper": 110,
        "yhat": 69
    },
    {
        "Date": "2020-08-20",
        "actual": 153,
        "yhat_lower": 47,
        "yhat_upper": 133,
        "yhat": 88
    },
    {
        "Date": "2020-08-21",
        "actual": 112,
        "yhat_lower": 45,
        "yhat_upper": 131,
        "yhat": 87
    },
    {
        "Date": "2020-08-22",
        "actual": 34,
        "yhat_lower": 16,
        "yhat_upper": 98,
        "yhat": 57
    },
    {
        "Date": "2020-08-23",
        "actual": 42,
        "yhat_lower": -1,
        "yhat_upper": 81,
        "yhat": 41
    },
    {
        "Date": "2020-08-24",
        "actual": 40,
        "yhat_lower": 35,
        "yhat_upper": 117,
        "yhat": 74
    },
    {
        "Date": "2020-08-25",
        "actual": 45,
        "yhat_lower": 33,
        "yhat_upper": 118,
        "yhat": 74
    },
    {
        "Date": "2020-08-26",
        "actual": 43,
        "yhat_lower": 26,
        "yhat_upper": 106,
        "yhat": 67
    },
    {
        "Date": "2020-08-27",
        "actual": 61,
        "yhat_lower": 42,
        "yhat_upper": 128,
        "yhat": 85
    },
    {
        "Date": "2020-08-28",
        "actual": 89,
        "yhat_lower": 40,
        "yhat_upper": 126,
        "yhat": 83
    },
    {
        "Date": "2020-08-29",
        "actual": 51,
        "yhat_lower": 11,
        "yhat_upper": 97,
        "yhat": 53
    },
    {
        "Date": "2020-08-30",
        "actual": 32,
        "yhat_lower": -6,
        "yhat_upper": 79,
        "yhat": 37
    },
    {
        "Date": "2020-08-31",
        "actual": 52,
        "yhat_lower": 27,
        "yhat_upper": 114,
        "yhat": 71
    },
    {
        "Date": "2020-09-01",
        "actual": 64,
        "yhat_lower": 29,
        "yhat_upper": 114,
        "yhat": 71
    },
    {
        "Date": "2020-09-02",
        "actual": 36,
        "yhat_lower": 22,
        "yhat_upper": 103,
        "yhat": 64
    },
    {
        "Date": "2020-09-03",
        "actual": 42,
        "yhat_lower": 39,
        "yhat_upper": 125,
        "yhat": 82
    },
    {
        "Date": "2020-09-04",
        "actual": 104,
        "yhat_lower": 40,
        "yhat_upper": 122,
        "yhat": 81
    },
    {
        "Date": "2020-09-05",
        "actual": 35,
        "yhat_lower": 10,
        "yhat_upper": 96,
        "yhat": 51
    },
    {
        "Date": "2020-09-06",
        "actual": 30,
        "yhat_lower": -7,
        "yhat_upper": 77,
        "yhat": 36
    },
    {
        "Date": "2020-09-07",
        "actual": 27,
        "yhat_lower": 27,
        "yhat_upper": 112,
        "yhat": 70
    },
    {
        "Date": "2020-09-08",
        "actual": 53,
        "yhat_lower": 31,
        "yhat_upper": 116,
        "yhat": 71
    },
    {
        "Date": "2020-09-09",
        "actual": 54,
        "yhat_lower": 21,
        "yhat_upper": 110,
        "yhat": 65
    },
    {
        "Date": "2020-09-10",
        "actual": 147,
        "yhat_lower": 43,
        "yhat_upper": 125,
        "yhat": 85
    },
    {
        "Date": "2020-09-11",
        "actual": 104,
        "yhat_lower": 41,
        "yhat_upper": 126,
        "yhat": 84
    },
    {
        "Date": "2020-09-12",
        "actual": 53,
        "yhat_lower": 15,
        "yhat_upper": 99,
        "yhat": 55
    },
    {
        "Date": "2020-09-13",
        "actual": 52,
        "yhat_lower": 0,
        "yhat_upper": 86,
        "yhat": 41
    },
    {
        "Date": "2020-09-14",
        "actual": 50,
        "yhat_lower": 33,
        "yhat_upper": 116,
        "yhat": 76
    },
    {
        "Date": "2020-09-15",
        "actual": 55,
        "yhat_lower": 36,
        "yhat_upper": 122,
        "yhat": 78
    },
    {
        "Date": "2020-09-16",
        "actual": 69,
        "yhat_lower": 35,
        "yhat_upper": 115,
        "yhat": 72
    },
    {
        "Date": "2020-09-17",
        "actual": 52,
        "yhat_lower": 52,
        "yhat_upper": 134,
        "yhat": 92
    },
    {
        "Date": "2020-09-18",
        "actual": 99,
        "yhat_lower": 49,
        "yhat_upper": 132,
        "yhat": 92
    },
    {
        "Date": "2020-09-19",
        "actual": 44,
        "yhat_lower": 22,
        "yhat_upper": 107,
        "yhat": 64
    },
    {
        "Date": "2020-09-20",
        "actual": 25,
        "yhat_lower": 9,
        "yhat_upper": 90,
        "yhat": 50
    },
    {
        "Date": "2020-09-21",
        "actual": 52,
        "yhat_lower": 40,
        "yhat_upper": 127,
        "yhat": 84
    },
    {
        "Date": "2020-09-22",
        "actual": 55,
        "yhat_lower": 43,
        "yhat_upper": 129,
        "yhat": 86
    },
    {
        "Date": "2020-09-23",
        "actual": 56,
        "yhat_lower": 39,
        "yhat_upper": 124,
        "yhat": 80
    },
    {
        "Date": "2020-09-24",
        "actual": 138,
        "yhat_lower": 59,
        "yhat_upper": 141,
        "yhat": 100
    },
    {
        "Date": "2020-09-25",
        "actual": 101,
        "yhat_lower": 57,
        "yhat_upper": 143,
        "yhat": 99
    },
    {
        "Date": "2020-09-26",
        "actual": 50,
        "yhat_lower": 28,
        "yhat_upper": 112,
        "yhat": 70
    },
    {
        "Date": "2020-09-27",
        "actual": 26,
        "yhat_lower": 10,
        "yhat_upper": 95,
        "yhat": 55
    },
    {
        "Date": "2020-09-28",
        "actual": 53,
        "yhat_lower": 48,
        "yhat_upper": 130,
        "yhat": 89
    },
    {
        "Date": "2020-09-29",
        "actual": 64,
        "yhat_lower": 49,
        "yhat_upper": 132,
        "yhat": 90
    },
    {
        "Date": "2020-09-30",
        "actual": 52,
        "yhat_lower": 39,
        "yhat_upper": 125,
        "yhat": 83
    },
    {
        "Date": "2020-10-01",
        "actual": 153,
        "yhat_lower": 60,
        "yhat_upper": 147,
        "yhat": 101
    },
    {
        "Date": "2020-10-02",
        "actual": 114,
        "yhat_lower": 58,
        "yhat_upper": 146,
        "yhat": 100
    },
    {
        "Date": "2020-10-03",
        "actual": 53,
        "yhat_lower": 30,
        "yhat_upper": 115,
        "yhat": 70
    },
    {
        "Date": "2020-10-04",
        "actual": 45,
        "yhat_lower": 11,
        "yhat_upper": 95,
        "yhat": 54
    },
    {
        "Date": "2020-10-05",
        "actual": 77,
        "yhat_lower": 47,
        "yhat_upper": 130,
        "yhat": 87
    },
    {
        "Date": "2020-10-06",
        "actual": 86,
        "yhat_lower": 44,
        "yhat_upper": 130,
        "yhat": 87
    },
    {
        "Date": "2020-10-07",
        "actual": 57,
        "yhat_lower": 38,
        "yhat_upper": 122,
        "yhat": 80
    },
    {
        "Date": "2020-10-08",
        "actual": 162,
        "yhat_lower": 54,
        "yhat_upper": 144,
        "yhat": 98
    },
    {
        "Date": "2020-10-09",
        "actual": 111,
        "yhat_lower": 55,
        "yhat_upper": 137,
        "yhat": 95
    },
    {
        "Date": "2020-10-10",
        "actual": 47,
        "yhat_lower": 19,
        "yhat_upper": 106,
        "yhat": 65
    },
    {
        "Date": "2020-10-11",
        "actual": 46,
        "yhat_lower": 6,
        "yhat_upper": 93,
        "yhat": 49
    },
    {
        "Date": "2020-10-12",
        "actual": 44,
        "yhat_lower": 42,
        "yhat_upper": 123,
        "yhat": 82
    },
    {
        "Date": "2020-10-13",
        "actual": 79,
        "yhat_lower": 38,
        "yhat_upper": 126,
        "yhat": 82
    },
    {
        "Date": "2020-10-14",
        "actual": 48,
        "yhat_lower": 32,
        "yhat_upper": 111,
        "yhat": 74
    },
    {
        "Date": "2020-10-15",
        "actual": 141,
        "yhat_lower": 51,
        "yhat_upper": 132,
        "yhat": 92
    },
    {
        "Date": "2020-10-16",
        "actual": 102,
        "yhat_lower": 48,
        "yhat_upper": 134,
        "yhat": 90
    },
    {
        "Date": "2020-10-17",
        "actual": 31,
        "yhat_lower": 17,
        "yhat_upper": 104,
        "yhat": 60
    },
    {
        "Date": "2020-10-18",
        "actual": 41,
        "yhat_lower": 7,
        "yhat_upper": 89,
        "yhat": 45
    },
    {
        "Date": "2020-10-19",
        "actual": 55,
        "yhat_lower": 38,
        "yhat_upper": 123,
        "yhat": 78
    },
    {
        "Date": "2020-10-20",
        "actual": 48,
        "yhat_lower": 35,
        "yhat_upper": 120,
        "yhat": 79
    },
    {
        "Date": "2020-10-21",
        "actual": 44,
        "yhat_lower": 32,
        "yhat_upper": 112,
        "yhat": 72
    },
    {
        "Date": "2020-10-22",
        "actual": 167,
        "yhat_lower": 48,
        "yhat_upper": 129,
        "yhat": 91
    },
    {
        "Date": "2020-10-23",
        "actual": 103,
        "yhat_lower": 51,
        "yhat_upper": 132,
        "yhat": 90
    },
    {
        "Date": "2020-10-24",
        "actual": 40,
        "yhat_lower": 20,
        "yhat_upper": 102,
        "yhat": 61
    },
    {
        "Date": "2020-10-25",
        "actual": 35,
        "yhat_lower": 3,
        "yhat_upper": 86,
        "yhat": 46
    },
    {
        "Date": "2020-10-26",
        "actual": 67,
        "yhat_lower": 40,
        "yhat_upper": 122,
        "yhat": 81
    },
    {
        "Date": "2020-10-27",
        "actual": 93,
        "yhat_lower": 41,
        "yhat_upper": 124,
        "yhat": 82
    },
    {
        "Date": "2020-10-28",
        "actual": 52,
        "yhat_lower": 37,
        "yhat_upper": 118,
        "yhat": 77
    },
    {
        "Date": "2020-10-29",
        "actual": 169,
        "yhat_lower": 53,
        "yhat_upper": 140,
        "yhat": 96
    },
    {
        "Date": "2020-10-30",
        "actual": 90,
        "yhat_lower": 50,
        "yhat_upper": 138,
        "yhat": 96
    },
    {
        "Date": "2020-10-31",
        "actual": 54,
        "yhat_lower": 24,
        "yhat_upper": 114,
        "yhat": 68
    },
    {
        "Date": "2020-11-01",
        "actual": 56,
        "yhat_lower": 11,
        "yhat_upper": 94,
        "yhat": 54
    },
    {
        "Date": "2020-11-02",
        "actual": 78,
        "yhat_lower": 47,
        "yhat_upper": 128,
        "yhat": 90
    },
    {
        "Date": "2020-11-03",
        "actual": 81,
        "yhat_lower": 51,
        "yhat_upper": 135,
        "yhat": 92
    },
    {
        "Date": "2020-11-04",
        "actual": 71,
        "yhat_lower": 46,
        "yhat_upper": 128,
        "yhat": 87
    },
    {
        "Date": "2020-11-05",
        "actual": 176,
        "yhat_lower": 64,
        "yhat_upper": 152,
        "yhat": 107
    },
    {
        "Date": "2020-11-06",
        "actual": 130,
        "yhat_lower": 67,
        "yhat_upper": 152,
        "yhat": 108
    },
    {
        "Date": "2020-11-07",
        "actual": 66,
        "yhat_lower": 38,
        "yhat_upper": 121,
        "yhat": 80
    },
    {
        "Date": "2020-11-08",
        "actual": 55,
        "yhat_lower": 26,
        "yhat_upper": 110,
        "yhat": 67
    },
    {
        "Date": "2020-11-09",
        "actual": 81,
        "yhat_lower": 59,
        "yhat_upper": 144,
        "yhat": 103
    },
    {
        "Date": "2020-11-10",
        "actual": 89,
        "yhat_lower": 65,
        "yhat_upper": 151,
        "yhat": 106
    },
    {
        "Date": "2020-11-11",
        "actual": 74,
        "yhat_lower": 58,
        "yhat_upper": 144,
        "yhat": 101
    },
    {
        "Date": "2020-11-12",
        "actual": 197,
        "yhat_lower": 81,
        "yhat_upper": 165,
        "yhat": 123
    },
    {
        "Date": "2020-11-13",
        "actual": 124,
        "yhat_lower": 81,
        "yhat_upper": 165,
        "yhat": 124
    },
    {
        "Date": "2020-11-14",
        "actual": 87,
        "yhat_lower": 55,
        "yhat_upper": 137,
        "yhat": 97
    },
    {
        "Date": "2020-11-15",
        "actual": 74,
        "yhat_lower": 38,
        "yhat_upper": 125,
        "yhat": 84
    },
    {
        "Date": "2020-11-16",
        "actual": 109,
        "yhat_lower": 80,
        "yhat_upper": 163,
        "yhat": 120
    },
    {
        "Date": "2020-11-17",
        "actual": 114,
        "yhat_lower": 82,
        "yhat_upper": 165,
        "yhat": 124
    },
    {
        "Date": "2020-11-18",
        "actual": 96,
        "yhat_lower": 79,
        "yhat_upper": 160,
        "yhat": 119
    },
    {
        "Date": "2020-11-19",
        "actual": 214,
        "yhat_lower": 97,
        "yhat_upper": 183,
        "yhat": 141
    },
    {
        "Date": "2020-11-20",
        "actual": 181,
        "yhat_lower": 98,
        "yhat_upper": 182,
        "yhat": 142
    },
    {
        "Date": "2020-11-21",
        "actual": 119,
        "yhat_lower": 75,
        "yhat_upper": 156,
        "yhat": 115
    },
    {
        "Date": "2020-11-22",
        "actual": 109,
        "yhat_lower": 60,
        "yhat_upper": 144,
        "yhat": 103
    },
    {
        "Date": "2020-11-23",
        "actual": 134,
        "yhat_lower": 99,
        "yhat_upper": 185,
        "yhat": 140
    },
    {
        "Date": "2020-11-24",
        "actual": 168,
        "yhat_lower": 102,
        "yhat_upper": 185,
        "yhat": 143
    },
    {
        "Date": "2020-11-25",
        "actual": 156,
        "yhat_lower": 98,
        "yhat_upper": 183,
        "yhat": 139
    },
    {
        "Date": "2020-11-26",
        "actual": 93,
        "yhat_lower": 121,
        "yhat_upper": 200,
        "yhat": 161
    },
    {
        "Date": "2020-11-27",
        "actual": 142,
        "yhat_lower": 119,
        "yhat_upper": 204,
        "yhat": 163
    },
    {
        "Date": "2020-11-28",
        "actual": 81,
        "yhat_lower": 92,
        "yhat_upper": 176,
        "yhat": 136
    },
    {
        "Date": "2020-11-29",
        "actual": 97,
        "yhat_lower": 81,
        "yhat_upper": 166,
        "yhat": 124
    },
    {
        "Date": "2020-11-30",
        "actual": 163,
        "yhat_lower": 117,
        "yhat_upper": 201,
        "yhat": 160
    },
    {
        "Date": "2020-12-01",
        "actual": 122,
        "yhat_lower": 124,
        "yhat_upper": 208,
        "yhat": 164
    },
    {
        "Date": "2020-12-02",
        "actual": 136,
        "yhat_lower": 117,
        "yhat_upper": 204,
        "yhat": 160
    },
    {
        "Date": "2020-12-03",
        "actual": 340,
        "yhat_lower": 140,
        "yhat_upper": 224,
        "yhat": 182
    },
    {
        "Date": "2020-12-04",
        "actual": 206,
        "yhat_lower": 141,
        "yhat_upper": 224,
        "yhat": 183
    },
    {
        "Date": "2020-12-05",
        "actual": 81,
        "yhat_lower": 115,
        "yhat_upper": 196,
        "yhat": 157
    },
    {
        "Date": "2020-12-06",
        "actual": 106,
        "yhat_lower": 101,
        "yhat_upper": 186,
        "yhat": 144
    },
    {
        "Date": "2020-12-07",
        "actual": 141,
        "yhat_lower": 138,
        "yhat_upper": 227,
        "yhat": 181
    },
    {
        "Date": "2020-12-08",
        "actual": 136,
        "yhat_lower": 142,
        "yhat_upper": 225,
        "yhat": 185
    },
    {
        "Date": "2020-12-09",
        "actual": 126,
        "yhat_lower": 139,
        "yhat_upper": 224,
        "yhat": 181
    },
    {
        "Date": "2020-12-10",
        "actual": 142,
        "yhat_lower": 159,
        "yhat_upper": 247,
        "yhat": 202
    },
    {
        "Date": "2020-12-11",
        "actual": 199,
        "yhat_lower": 161,
        "yhat_upper": 246,
        "yhat": 204
    },
    {
        "Date": "2020-12-12",
        "actual": 135,
        "yhat_lower": 136,
        "yhat_upper": 219,
        "yhat": 177
    },
    {
        "Date": "2020-12-13",
        "actual": 95,
        "yhat_lower": 124,
        "yhat_upper": 208,
        "yhat": 165
    },
    {
        "Date": "2020-12-14",
        "actual": 153,
        "yhat_lower": 161,
        "yhat_upper": 238,
        "yhat": 201
    },
    {
        "Date": "2020-12-15",
        "actual": 186,
        "yhat_lower": 162,
        "yhat_upper": 244,
        "yhat": 204
    },
    {
        "Date": "2020-12-16",
        "actual": 112,
        "yhat_lower": 159,
        "yhat_upper": 240,
        "yhat": 200
    },
    {
        "Date": "2020-12-17",
        "actual": 186,
        "yhat_lower": 180,
        "yhat_upper": 265,
        "yhat": 221
    },
    {
        "Date": "2020-12-18",
        "actual": 188,
        "yhat_lower": 181,
        "yhat_upper": 264,
        "yhat": 223
    },
    {
        "Date": "2020-12-19",
        "actual": 145,
        "yhat_lower": 155,
        "yhat_upper": 240,
        "yhat": 195
    },
    {
        "Date": "2020-12-20",
        "actual": 138,
        "yhat_lower": 136,
        "yhat_upper": 224,
        "yhat": 182
    },
    {
        "Date": "2020-12-21",
        "actual": 227,
        "yhat_lower": 176,
        "yhat_upper": 259,
        "yhat": 218
    },
    {
        "Date": "2020-12-22",
        "actual": 210,
        "yhat_lower": 178,
        "yhat_upper": 262,
        "yhat": 221
    },
    {
        "Date": "2020-12-23",
        "actual": 300,
        "yhat_lower": 171,
        "yhat_upper": 255,
        "yhat": 215
    },
    {
        "Date": "2020-12-24",
        "actual": 259,
        "yhat_lower": 194,
        "yhat_upper": 279,
        "yhat": 236
    },
    {
        "Date": "2020-12-25",
        "actual": 118,
        "yhat_lower": 192,
        "yhat_upper": 278,
        "yhat": 236
    },
    {
        "Date": "2020-12-26",
        "actual": 145,
        "yhat_lower": 164,
        "yhat_upper": 249,
        "yhat": 207
    },
    {
        "Date": "2020-12-27",
        "actual": 109,
        "yhat_lower": 153,
        "yhat_upper": 234,
        "yhat": 192
    },
    {
        "Date": "2020-12-28",
        "actual": 195,
        "yhat_lower": 184,
        "yhat_upper": 271,
        "yhat": 227
    },
    {
        "Date": "2020-12-29",
        "actual": 218,
        "yhat_lower": 185,
        "yhat_upper": 272,
        "yhat": 227
    },
    {
        "Date": "2020-12-30",
        "actual": 210,
        "yhat_lower": 178,
        "yhat_upper": 262,
        "yhat": 220
    },
    {
        "Date": "2020-12-31",
        "actual": 237,
        "yhat_lower": 195,
        "yhat_upper": 279,
        "yhat": 238
    },
    {
        "Date": "2021-01-01",
        "actual": 125,
        "yhat_lower": 194,
        "yhat_upper": 275,
        "yhat": 236
    },
    {
        "Date": "2021-01-02",
        "actual": 171,
        "yhat_lower": 164,
        "yhat_upper": 247,
        "yhat": 205
    },
    {
        "Date": "2021-01-03",
        "actual": 158,
        "yhat_lower": 145,
        "yhat_upper": 231,
        "yhat": 188
    },
    {
        "Date": "2021-01-04",
        "actual": 174,
        "yhat_lower": 177,
        "yhat_upper": 261,
        "yhat": 219
    },
    {
        "Date": "2021-01-05",
        "actual": 158,
        "yhat_lower": 175,
        "yhat_upper": 258,
        "yhat": 217
    },
    {
        "Date": "2021-01-06",
        "actual": 143,
        "yhat_lower": 167,
        "yhat_upper": 250,
        "yhat": 207
    },
    {
        "Date": "2021-01-07",
        "actual": 294,
        "yhat_lower": 178,
        "yhat_upper": 263,
        "yhat": 223
    },
    {
        "Date": "2021-01-08",
        "actual": 220,
        "yhat_lower": 177,
        "yhat_upper": 261,
        "yhat": 218
    },
    {
        "Date": "2021-01-09",
        "actual": 168,
        "yhat_lower": 140,
        "yhat_upper": 228,
        "yhat": 184
    },
    {
        "Date": "2021-01-10",
        "actual": 141,
        "yhat_lower": 123,
        "yhat_upper": 207,
        "yhat": 165
    },
    {
        "Date": "2021-01-11",
        "actual": 181,
        "yhat_lower": 153,
        "yhat_upper": 236,
        "yhat": 194
    },
    {
        "Date": "2021-01-12",
        "actual": 156,
        "yhat_lower": 148,
        "yhat_upper": 230,
        "yhat": 190
    },
    {
        "Date": "2021-01-13",
        "actual": 123,
        "yhat_lower": 137,
        "yhat_upper": 220,
        "yhat": 178
    },
    {
        "Date": "2021-01-14",
        "actual": 278,
        "yhat_lower": 152,
        "yhat_upper": 231,
        "yhat": 191
    },
    {
        "Date": "2021-01-15",
        "actual": 207,
        "yhat_lower": 141,
        "yhat_upper": 224,
        "yhat": 185
    },
    {
        "Date": "2021-01-16",
        "actual": 104,
        "yhat_lower": 109,
        "yhat_upper": 192,
        "yhat": 150
    },
    {
        "Date": "2021-01-17",
        "actual": 114,
        "yhat_lower": 89,
        "yhat_upper": 174,
        "yhat": 129
    },
    {
        "Date": "2021-01-18",
        "actual": 193,
        "yhat_lower": 117,
        "yhat_upper": 197,
        "yhat": 158
    },
    {
        "Date": "2021-01-19",
        "actual": 133,
        "yhat_lower": 113,
        "yhat_upper": 197,
        "yhat": 153
    },
    {
        "Date": "2021-01-20",
        "actual": 107,
        "yhat_lower": 100,
        "yhat_upper": 184,
        "yhat": 141
    },
    {
        "Date": "2021-01-21",
        "actual": 234,
        "yhat_lower": 116,
        "yhat_upper": 197,
        "yhat": 155
    },
    {
        "Date": "2021-01-22",
        "actual": 216,
        "yhat_lower": 105,
        "yhat_upper": 190,
        "yhat": 149
    },
    {
        "Date": "2021-01-23",
        "actual": 155,
        "yhat_lower": 70,
        "yhat_upper": 157,
        "yhat": 115
    },
    {
        "Date": "2021-01-24",
        "actual": 119,
        "yhat_lower": 54,
        "yhat_upper": 137,
        "yhat": 96
    },
    {
        "Date": "2021-01-25",
        "actual": 166,
        "yhat_lower": 82,
        "yhat_upper": 167,
        "yhat": 126
    },
    {
        "Date": "2021-01-26",
        "actual": 133,
        "yhat_lower": 81,
        "yhat_upper": 162,
        "yhat": 123
    },
    {
        "Date": "2021-01-27",
        "actual": 118,
        "yhat_lower": 71,
        "yhat_upper": 153,
        "yhat": 112
    },
    {
        "Date": "2021-01-28",
        "actual": 138,
        "yhat_lower": 86,
        "yhat_upper": 171,
        "yhat": 128
    },
    {
        "Date": "2021-01-29",
        "actual": 154,
        "yhat_lower": 85,
        "yhat_upper": 171,
        "yhat": 124
    },
    {
        "Date": "2021-01-30",
        "actual": 120,
        "yhat_lower": 49,
        "yhat_upper": 137,
        "yhat": 93
    },
    {
        "Date": "2021-01-31",
        "actual": 78,
        "yhat_lower": 34,
        "yhat_upper": 121,
        "yhat": 76
    },
    {
        "Date": "2021-02-02",
        "actual": 127,
        "yhat_lower": 65,
        "yhat_upper": 148,
        "yhat": 107
    },
    {
        "Date": "2021-02-03",
        "actual": 192,
        "yhat_lower": 57,
        "yhat_upper": 141,
        "yhat": 100
    },
    {
        "Date": "2021-02-04",
        "actual": 119,
        "yhat_lower": 75,
        "yhat_upper": 160,
        "yhat": 118
    },
    {
        "Date": "2021-02-05",
        "actual": 158,
        "yhat_lower": 71,
        "yhat_upper": 159,
        "yhat": 116
    },
    {
        "Date": "2021-02-06",
        "actual": 119,
        "yhat_lower": 43,
        "yhat_upper": 126,
        "yhat": 86
    },
    {
        "Date": "2021-02-07",
        "actual": 42,
        "yhat_lower": 30,
        "yhat_upper": 112,
        "yhat": 71
    },
    {
        "Date": "2021-02-08",
        "actual": 172,
        "yhat_lower": 59,
        "yhat_upper": 146,
        "yhat": 105
    },
    {
        "Date": "2021-02-09",
        "actual": 113,
        "yhat_lower": 63,
        "yhat_upper": 149,
        "yhat": 106
    },
    {
        "Date": "2021-02-10",
        "actual": 151,
        "yhat_lower": 58,
        "yhat_upper": 144,
        "yhat": 99
    },
    {
        "Date": "2021-02-11",
        "actual": 130,
        "yhat_lower": 78,
        "yhat_upper": 163,
        "yhat": 119
    },
    {
        "Date": "2021-02-12",
        "actual": 174,
        "yhat_lower": 77,
        "yhat_upper": 157,
        "yhat": 118
    },
    {
        "Date": "2021-02-13",
        "actual": 107,
        "yhat_lower": 46,
        "yhat_upper": 130,
        "yhat": 88
    },
    {
        "Date": "2021-02-14",
        "actual": 76,
        "yhat_lower": 33,
        "yhat_upper": 113,
        "yhat": 74
    },
    {
        "Date": "2021-02-15",
        "actual": 139,
        "yhat_lower": 66,
        "yhat_upper": 152,
        "yhat": 108
    },
    {
        "Date": "2021-02-16",
        "actual": 158,
        "yhat_lower": 66,
        "yhat_upper": 150,
        "yhat": 108
    },
    {
        "Date": "2021-02-17",
        "actual": 104,
        "yhat_lower": 59,
        "yhat_upper": 142,
        "yhat": 101
    },
    {
        "Date": "2021-02-18",
        "actual": 54,
        "yhat_lower": 79,
        "yhat_upper": 164,
        "yhat": 120
    },
    {
        "Date": "2021-02-19",
        "actual": 136,
        "yhat_lower": 75,
        "yhat_upper": 159,
        "yhat": 119
    },
    {
        "Date": "2021-02-20",
        "actual": 137,
        "yhat_lower": 46,
        "yhat_upper": 130,
        "yhat": 89
    },
    {
        "Date": "2021-02-21",
        "actual": 130,
        "yhat_lower": 33,
        "yhat_upper": 114,
        "yhat": 73
    },
    {
        "Date": "2021-02-22",
        "actual": 173,
        "yhat_lower": 66,
        "yhat_upper": 146,
        "yhat": 106
    },
    {
        "Date": "2021-02-23",
        "actual": 128,
        "yhat_lower": 64,
        "yhat_upper": 147,
        "yhat": 106
    },
    {
        "Date": "2021-02-24",
        "actual": 177,
        "yhat_lower": 59,
        "yhat_upper": 141,
        "yhat": 99
    },
    {
        "Date": "2021-02-25",
        "actual": 120,
        "yhat_lower": 73,
        "yhat_upper": 158,
        "yhat": 117
    },
    {
        "Date": "2021-02-26",
        "actual": 193,
        "yhat_lower": 73,
        "yhat_upper": 156,
        "yhat": 115
    },
    {
        "Date": "2021-02-27",
        "actual": 115,
        "yhat_lower": 42,
        "yhat_upper": 122,
        "yhat": 84
    },
    {
        "Date": "2021-02-28",
        "actual": 79,
        "yhat_lower": 26,
        "yhat_upper": 108,
        "yhat": 68
    },
    {
        "Date": "2021-03-01",
        "actual": 113,
        "yhat_lower": 58,
        "yhat_upper": 141,
        "yhat": 101
    },
    {
        "Date": "2021-03-02",
        "actual": 105,
        "yhat_lower": 62,
        "yhat_upper": 139,
        "yhat": 101
    },
    {
        "Date": "2021-03-03",
        "actual": 126,
        "yhat_lower": 50,
        "yhat_upper": 135,
        "yhat": 94
    },
    {
        "Date": "2021-03-04",
        "actual": 128,
        "yhat_lower": 69,
        "yhat_upper": 155,
        "yhat": 112
    },
    {
        "Date": "2021-03-05",
        "actual": 142,
        "yhat_lower": 71,
        "yhat_upper": 152,
        "yhat": 111
    },
    {
        "Date": "2021-03-06",
        "actual": 75,
        "yhat_lower": 37,
        "yhat_upper": 122,
        "yhat": 81
    },
    {
        "Date": "2021-03-07",
        "actual": 95,
        "yhat_lower": 25,
        "yhat_upper": 105,
        "yhat": 66
    },
    {
        "Date": "2021-03-08",
        "actual": 133,
        "yhat_lower": 58,
        "yhat_upper": 142,
        "yhat": 100
    },
    {
        "Date": "2021-03-09",
        "actual": 115,
        "yhat_lower": 58,
        "yhat_upper": 146,
        "yhat": 100
    },
    {
        "Date": "2021-03-10",
        "actual": 124,
        "yhat_lower": 53,
        "yhat_upper": 137,
        "yhat": 94
    },
    {
        "Date": "2021-03-11",
        "actual": 132,
        "yhat_lower": 70,
        "yhat_upper": 154,
        "yhat": 113
    },
    {
        "Date": "2021-03-12",
        "actual": 160,
        "yhat_lower": 72,
        "yhat_upper": 155,
        "yhat": 113
    },
    {
        "Date": "2021-03-13",
        "actual": 97,
        "yhat_lower": 44,
        "yhat_upper": 125,
        "yhat": 84
    },
    {
        "Date": "2021-03-14",
        "actual": 82,
        "yhat_lower": 29,
        "yhat_upper": 114,
        "yhat": 70
    },
    {
        "Date": "2021-03-15",
        "actual": 99,
        "yhat_lower": 63,
        "yhat_upper": 147,
        "yhat": 105
    },
    {
        "Date": "2021-03-16",
        "actual": 119,
        "yhat_lower": 68,
        "yhat_upper": 149,
        "yhat": 107
    },
    {
        "Date": "2021-03-17",
        "actual": 154,
        "yhat_lower": 59,
        "yhat_upper": 141,
        "yhat": 102
    },
    {
        "Date": "2021-03-18",
        "actual": 170,
        "yhat_lower": 80,
        "yhat_upper": 162,
        "yhat": 122
    },
    {
        "Date": "2021-03-19",
        "actual": 205,
        "yhat_lower": 78,
        "yhat_upper": 162,
        "yhat": 122
    },
    {
        "Date": "2021-03-20",
        "actual": 117,
        "yhat_lower": 49,
        "yhat_upper": 136,
        "yhat": 94
    },
    {
        "Date": "2021-03-21",
        "actual": 98,
        "yhat_lower": 36,
        "yhat_upper": 120,
        "yhat": 80
    },
    {
        "Date": "2021-03-22",
        "actual": 133,
        "yhat_lower": 72,
        "yhat_upper": 155,
        "yhat": 115
    },
    {
        "Date": "2021-03-23",
        "actual": 117,
        "yhat_lower": 75,
        "yhat_upper": 158,
        "yhat": 117
    },
    {
        "Date": "2021-03-24",
        "actual": 138,
        "yhat_lower": 70,
        "yhat_upper": 153,
        "yhat": 111
    },
    {
        "Date": "2021-03-25",
        "actual": 154,
        "yhat_lower": 89,
        "yhat_upper": 174,
        "yhat": 131
    },
    {
        "Date": "2021-03-26",
        "actual": 209,
        "yhat_lower": 92,
        "yhat_upper": 171,
        "yhat": 130
    },
    {
        "Date": "2021-03-27",
        "actual": 124,
        "yhat_lower": 60,
        "yhat_upper": 141,
        "yhat": 101
    },
    {
        "Date": "2021-03-28",
        "actual": 92,
        "yhat_lower": 44,
        "yhat_upper": 126,
        "yhat": 86
    },
    {
        "Date": "2021-03-29",
        "actual": 136,
        "yhat_lower": 80,
        "yhat_upper": 165,
        "yhat": 120
    },
    {
        "Date": "2021-03-30",
        "actual": 145,
        "yhat_lower": 78,
        "yhat_upper": 159,
        "yhat": 120
    },
    {
        "Date": "2021-03-31",
        "actual": 166,
        "yhat_lower": 73,
        "yhat_upper": 157,
        "yhat": 113
    },
    {
        "Date": "2021-04-01",
        "actual": 125,
        "yhat_lower": 91,
        "yhat_upper": 175,
        "yhat": 132
    },
    {
        "Date": "2021-04-02",
        "actual": 180,
        "yhat_lower": 91,
        "yhat_upper": 171,
        "yhat": 129
    },
    {
        "Date": "2021-04-03",
        "actual": 118,
        "yhat_lower": 56,
        "yhat_upper": 138,
        "yhat": 99
    },
    {
        "Date": "2021-04-04",
        "actual": 126,
        "yhat_lower": 42,
        "yhat_upper": 124,
        "yhat": 83
    },
    {
        "Date": "2021-04-05",
        "actual": 154,
        "yhat_lower": 73,
        "yhat_upper": 158,
        "yhat": 115
    },
    {
        "Date": "2021-04-06",
        "actual": 119,
        "yhat_lower": 72,
        "yhat_upper": 157,
        "yhat": 114
    },
    {
        "Date": "2021-04-07",
        "actual": 137,
        "yhat_lower": 63,
        "yhat_upper": 147,
        "yhat": 106
    },
    {
        "Date": "2021-04-08",
        "actual": 185,
        "yhat_lower": 80,
        "yhat_upper": 166,
        "yhat": 123
    },
    {
        "Date": "2021-04-09",
        "actual": 154,
        "yhat_lower": 77,
        "yhat_upper": 164,
        "yhat": 120
    },
    {
        "Date": "2021-04-10",
        "actual": 108,
        "yhat_lower": 45,
        "yhat_upper": 133,
        "yhat": 89
    },
    {
        "Date": "2021-04-11",
        "actual": 82,
        "yhat_lower": 30,
        "yhat_upper": 115,
        "yhat": 72
    },
    {
        "Date": "2021-04-12",
        "actual": 92,
        "yhat_lower": 63,
        "yhat_upper": 142,
        "yhat": 104
    },
    {
        "Date": "2021-04-13",
        "actual": 125,
        "yhat_lower": 65,
        "yhat_upper": 147,
        "yhat": 103
    },
    {
        "Date": "2021-04-14",
        "actual": 89,
        "yhat_lower": 52,
        "yhat_upper": 137,
        "yhat": 94
    },
    {
        "Date": "2021-04-15",
        "actual": 94,
        "yhat_lower": 69,
        "yhat_upper": 157,
        "yhat": 112
    },
    {
        "Date": "2021-04-16",
        "actual": 110,
        "yhat_lower": 68,
        "yhat_upper": 155,
        "yhat": 109
    },
    {
        "Date": "2021-04-17",
        "actual": 92,
        "yhat_lower": 36,
        "yhat_upper": 120,
        "yhat": 78
    },
    {
        "Date": "2021-04-18",
        "actual": 82,
        "yhat_lower": 21,
        "yhat_upper": 103,
        "yhat": 62
    },
    {
        "Date": "2021-04-19",
        "actual": 64,
        "yhat_lower": 53,
        "yhat_upper": 136,
        "yhat": 95
    },
    {
        "Date": "2021-04-20",
        "actual": 64,
        "yhat_lower": 53,
        "yhat_upper": 137,
        "yhat": 95
    },
    {
        "Date": "2021-04-21",
        "actual": 100,
        "yhat_lower": 44,
        "yhat_upper": 130,
        "yhat": 87
    },
    {
        "Date": "2021-04-22",
        "actual": 89,
        "yhat_lower": 64,
        "yhat_upper": 147,
        "yhat": 105
    },
    {
        "Date": "2021-04-23",
        "actual": 126,
        "yhat_lower": 65,
        "yhat_upper": 149,
        "yhat": 104
    },
    {
        "Date": "2021-04-24",
        "actual": 124,
        "yhat_lower": 32,
        "yhat_upper": 117,
        "yhat": 74
    },
    {
        "Date": "2021-04-25",
        "actual": 60,
        "yhat_lower": 15,
        "yhat_upper": 103,
        "yhat": 58
    },
    {
        "Date": "2021-04-26",
        "actual": 88,
        "yhat_lower": 50,
        "yhat_upper": 132,
        "yhat": 92
    },
    {
        "Date": "2021-04-27",
        "actual": 86,
        "yhat_lower": 50,
        "yhat_upper": 133,
        "yhat": 92
    },
    {
        "Date": "2021-04-28",
        "actual": 90,
        "yhat_lower": 44,
        "yhat_upper": 126,
        "yhat": 86
    },
    {
        "Date": "2021-04-29",
        "actual": 101,
        "yhat_lower": 60,
        "yhat_upper": 145,
        "yhat": 104
    },
    {
        "Date": "2021-04-30",
        "actual": 77,
        "yhat_lower": 56,
        "yhat_upper": 143,
        "yhat": 103
    },
    {
        "Date": "2021-05-01",
        "actual": 76,
        "yhat_lower": 32,
        "yhat_upper": 116,
        "yhat": 74
    },
    {
        "Date": "2021-05-02",
        "actual": 43,
        "yhat_lower": 19,
        "yhat_upper": 103,
        "yhat": 59
    },
    {
        "Date": "2021-05-03",
        "actual": 66,
        "yhat_lower": 47,
        "yhat_upper": 137,
        "yhat": 92
    },
    {
        "Date": "2021-05-04",
        "actual": 78,
        "yhat_lower": 49,
        "yhat_upper": 135,
        "yhat": 93
    },
    {
        "Date": "2021-05-05",
        "actual": 97,
        "yhat_lower": 46,
        "yhat_upper": 128,
        "yhat": 86
    },
    {
        "Date": "2021-05-06",
        "actual": 85,
        "yhat_lower": 66,
        "yhat_upper": 147,
        "yhat": 105
    },
    {
        "Date": "2021-05-07",
        "actual": 86,
        "yhat_lower": 62,
        "yhat_upper": 147,
        "yhat": 103
    },
    {
        "Date": "2021-05-08",
        "actual": 67,
        "yhat_lower": 30,
        "yhat_upper": 114,
        "yhat": 73
    },
    {
        "Date": "2021-05-09",
        "actual": 51,
        "yhat_lower": 19,
        "yhat_upper": 102,
        "yhat": 58
    },
    {
        "Date": "2021-05-10",
        "actual": 66,
        "yhat_lower": 47,
        "yhat_upper": 134,
        "yhat": 91
    },
    {
        "Date": "2021-05-11",
        "actual": 78,
        "yhat_lower": 47,
        "yhat_upper": 134,
        "yhat": 91
    },
    {
        "Date": "2021-05-12",
        "actual": 90,
        "yhat_lower": 42,
        "yhat_upper": 127,
        "yhat": 84
    },
    {
        "Date": "2021-05-13",
        "actual": 75,
        "yhat_lower": 56,
        "yhat_upper": 141,
        "yhat": 102
    },
    {
        "Date": "2021-05-14",
        "actual": 78,
        "yhat_lower": 60,
        "yhat_upper": 143,
        "yhat": 100
    },
    {
        "Date": "2021-05-15",
        "actual": 55,
        "yhat_lower": 25,
        "yhat_upper": 112,
        "yhat": 70
    },
    {
        "Date": "2021-05-16",
        "actual": 62,
        "yhat_lower": 15,
        "yhat_upper": 97,
        "yhat": 54
    },
    {
        "Date": "2021-05-17",
        "actual": 103,
        "yhat_lower": 45,
        "yhat_upper": 128,
        "yhat": 87
    },
    {
        "Date": "2021-05-18",
        "actual": 73,
        "yhat_lower": 45,
        "yhat_upper": 131,
        "yhat": 87
    },
    {
        "Date": "2021-05-19",
        "actual": 69,
        "yhat_lower": 37,
        "yhat_upper": 120,
        "yhat": 79
    },
    {
        "Date": "2021-05-20",
        "actual": 65,
        "yhat_lower": 53,
        "yhat_upper": 140,
        "yhat": 97
    },
    {
        "Date": "2021-05-21",
        "actual": 70,
        "yhat_lower": 51,
        "yhat_upper": 138,
        "yhat": 95
    },
    {
        "Date": "2021-05-22",
        "actual": 55,
        "yhat_lower": 21,
        "yhat_upper": 110,
        "yhat": 65
    },
    {
        "Date": "2021-05-23",
        "actual": 32,
        "yhat_lower": 9,
        "yhat_upper": 89,
        "yhat": 49
    },
    {
        "Date": "2021-05-24",
        "actual": 66,
        "yhat_lower": 42,
        "yhat_upper": 127,
        "yhat": 82
    },
    {
        "Date": "2021-05-25",
        "actual": 62,
        "yhat_lower": 39,
        "yhat_upper": 124,
        "yhat": 82
    },
    {
        "Date": "2021-05-26",
        "actual": 63,
        "yhat_lower": 28,
        "yhat_upper": 114,
        "yhat": 75
    },
    {
        "Date": "2021-05-27",
        "actual": 62,
        "yhat_lower": 53,
        "yhat_upper": 136,
        "yhat": 93
    },
    {
        "Date": "2021-05-28",
        "actual": 61,
        "yhat_lower": 49,
        "yhat_upper": 134,
        "yhat": 91
    },
    {
        "Date": "2021-05-29",
        "actual": 67,
        "yhat_lower": 19,
        "yhat_upper": 105,
        "yhat": 61
    },
    {
        "Date": "2021-05-30",
        "actual": 24,
        "yhat_lower": 3,
        "yhat_upper": 91,
        "yhat": 46
    },
    {
        "Date": "2021-05-31",
        "actual": 36,
        "yhat_lower": 38,
        "yhat_upper": 120,
        "yhat": 79
    },
    {
        "Date": "2021-06-01",
        "actual": 68,
        "yhat_lower": 37,
        "yhat_upper": 121,
        "yhat": 79
    },
    {
        "Date": "2021-06-02",
        "actual": 81,
        "yhat_lower": 30,
        "yhat_upper": 112,
        "yhat": 72
    },
    {
        "Date": "2021-06-03",
        "actual": 56,
        "yhat_lower": 47,
        "yhat_upper": 132,
        "yhat": 91
    },
    {
        "Date": "2021-06-04",
        "actual": 58,
        "yhat_lower": 51,
        "yhat_upper": 133,
        "yhat": 90
    },
    {
        "Date": "2021-06-05",
        "actual": 67,
        "yhat_lower": 23,
        "yhat_upper": 102,
        "yhat": 60
    },
    {
        "Date": "2021-06-06",
        "actual": 44,
        "yhat_lower": 1,
        "yhat_upper": 85,
        "yhat": 45
    },
    {
        "Date": "2021-06-07",
        "actual": 62,
        "yhat_lower": 35,
        "yhat_upper": 120,
        "yhat": 79
    },
    {
        "Date": "2021-06-08",
        "actual": 74,
        "yhat_lower": 39,
        "yhat_upper": 120,
        "yhat": 80
    },
    {
        "Date": "2021-06-09",
        "actual": 58,
        "yhat_lower": 31,
        "yhat_upper": 113,
        "yhat": 73
    },
    {
        "Date": "2021-06-10",
        "actual": 55,
        "yhat_lower": 51,
        "yhat_upper": 133,
        "yhat": 92
    },
    {
        "Date": "2021-06-11",
        "actual": 53,
        "yhat_lower": 47,
        "yhat_upper": 134,
        "yhat": 91
    },
    {
        "Date": "2021-06-12",
        "actual": 60,
        "yhat_lower": 19,
        "yhat_upper": 103,
        "yhat": 62
    },
    {
        "Date": "2021-06-13",
        "actual": 41,
        "yhat_lower": 7,
        "yhat_upper": 88,
        "yhat": 47
    },
    {
        "Date": "2021-06-14",
        "actual": 53,
        "yhat_lower": 37,
        "yhat_upper": 123,
        "yhat": 81
    },
    {
        "Date": "2021-06-15",
        "actual": 66,
        "yhat_lower": 41,
        "yhat_upper": 121,
        "yhat": 82
    },
    {
        "Date": "2021-06-16",
        "actual": 63,
        "yhat_lower": 35,
        "yhat_upper": 121,
        "yhat": 76
    },
    {
        "Date": "2021-06-17",
        "actual": 49,
        "yhat_lower": 53,
        "yhat_upper": 138,
        "yhat": 95
    },
    {
        "Date": "2021-06-18",
        "actual": 67,
        "yhat_lower": 52,
        "yhat_upper": 134,
        "yhat": 94
    },
    {
        "Date": "2021-06-19",
        "actual": 70,
        "yhat_lower": 20,
        "yhat_upper": 105,
        "yhat": 65
    },
    {
        "Date": "2021-06-20",
        "actual": 59,
        "yhat_lower": 9,
        "yhat_upper": 96,
        "yhat": 50
    },
    {
        "Date": "2021-06-21",
        "actual": 66,
        "yhat_lower": 41,
        "yhat_upper": 127,
        "yhat": 85
    },
    {
        "Date": "2021-06-22",
        "actual": 51,
        "yhat_lower": 44,
        "yhat_upper": 127,
        "yhat": 86
    },
    {
        "Date": "2021-06-23",
        "actual": 61,
        "yhat_lower": 35,
        "yhat_upper": 121,
        "yhat": 80
    },
    {
        "Date": "2021-06-24",
        "actual": 53,
        "yhat_lower": 57,
        "yhat_upper": 142,
        "yhat": 99
    },
    {
        "Date": "2021-06-25",
        "actual": 95,
        "yhat_lower": 56,
        "yhat_upper": 139,
        "yhat": 99
    },
    {
        "Date": "2021-06-26",
        "actual": 97,
        "yhat_lower": 27,
        "yhat_upper": 111,
        "yhat": 70
    },
    {
        "Date": "2021-06-27",
        "actual": 47,
        "yhat_lower": 11,
        "yhat_upper": 98,
        "yhat": 56
    },
    {
        "Date": "2021-06-28",
        "actual": 66,
        "yhat_lower": 50,
        "yhat_upper": 131,
        "yhat": 90
    },
    {
        "Date": "2021-06-29",
        "actual": 52,
        "yhat_lower": 50,
        "yhat_upper": 135,
        "yhat": 92
    },
    {
        "Date": "2021-06-30",
        "actual": 61,
        "yhat_lower": 44,
        "yhat_upper": 127,
        "yhat": 86
    },
    {
        "Date": "2021-07-01",
        "actual": 52,
        "yhat_lower": 63,
        "yhat_upper": 147,
        "yhat": 105
    },
    {
        "Date": "2021-07-02",
        "actual": 62,
        "yhat_lower": 63,
        "yhat_upper": 147,
        "yhat": 105
    },
    {
        "Date": "2021-07-03",
        "actual": 62,
        "yhat_lower": 33,
        "yhat_upper": 118,
        "yhat": 76
    },
    {
        "Date": "2021-07-04",
        "actual": 29,
        "yhat_lower": 17,
        "yhat_upper": 106,
        "yhat": 62
    },
    {
        "Date": "2021-07-05",
        "actual": 79,
        "yhat_lower": 54,
        "yhat_upper": 137,
        "yhat": 96
    },
    {
        "Date": "2021-07-06",
        "actual": 57,
        "yhat_lower": 55,
        "yhat_upper": 141,
        "yhat": 98
    },
    {
        "Date": "2021-07-07",
        "actual": 75,
        "yhat_lower": 52,
        "yhat_upper": 138,
        "yhat": 92
    },
    {
        "Date": "2021-07-08",
        "actual": 49,
        "yhat_lower": 66,
        "yhat_upper": 154,
        "yhat": 111
    },
    {
        "Date": "2021-07-09",
        "actual": 102,
        "yhat_lower": 66,
        "yhat_upper": 153,
        "yhat": 111
    },
    {
        "Date": "2021-07-10",
        "actual": 67,
        "yhat_lower": 39,
        "yhat_upper": 126,
        "yhat": 82
    },
    {
        "Date": "2021-07-11",
        "actual": 45,
        "yhat_lower": 24,
        "yhat_upper": 110,
        "yhat": 67
    },
    {
        "Date": "2021-07-12",
        "actual": 57,
        "yhat_lower": 61,
        "yhat_upper": 143,
        "yhat": 102
    },
    {
        "Date": "2021-07-13",
        "actual": 67,
        "yhat_lower": 59,
        "yhat_upper": 145,
        "yhat": 103
    },
    {
        "Date": "2021-07-14",
        "actual": 76,
        "yhat_lower": 54,
        "yhat_upper": 137,
        "yhat": 96
    },
    {
        "Date": "2021-07-15",
        "actual": 75,
        "yhat_lower": 73,
        "yhat_upper": 155,
        "yhat": 116
    },
    {
        "Date": "2021-07-16",
        "actual": 98,
        "yhat_lower": 74,
        "yhat_upper": 155,
        "yhat": 115
    },
    {
        "Date": "2021-07-17",
        "actual": 68,
        "yhat_lower": 41,
        "yhat_upper": 126,
        "yhat": 86
    },
    {
        "Date": "2021-07-18",
        "actual": 74,
        "yhat_lower": 29,
        "yhat_upper": 112,
        "yhat": 71
    },
    {
        "Date": "2021-07-19",
        "actual": 94,
        "yhat_lower": 66,
        "yhat_upper": 148,
        "yhat": 105
    },
    {
        "Date": "2021-07-20",
        "actual": 88,
        "yhat_lower": 68,
        "yhat_upper": 148,
        "yhat": 106
    },
    {
        "Date": "2021-07-21",
        "actual": 103,
        "yhat_lower": 59,
        "yhat_upper": 142,
        "yhat": 100
    },
    {
        "Date": "2021-07-22",
        "actual": 91,
        "yhat_lower": 76,
        "yhat_upper": 158,
        "yhat": 119
    },
    {
        "Date": "2021-07-23",
        "actual": 90,
        "yhat_lower": 75,
        "yhat_upper": 162,
        "yhat": 118
    },
    {
        "Date": "2021-07-24",
        "actual": 107,
        "yhat_lower": 48,
        "yhat_upper": 131,
        "yhat": 89
    },
    {
        "Date": "2021-07-25",
        "actual": 67,
        "yhat_lower": 32,
        "yhat_upper": 115,
        "yhat": 75
    },
    {
        "Date": "2021-07-26",
        "actual": 68,
        "yhat_lower": 67,
        "yhat_upper": 150,
        "yhat": 109
    },
    {
        "Date": "2021-07-27",
        "actual": 74,
        "yhat_lower": 70,
        "yhat_upper": 153,
        "yhat": 110
    },
    {
        "Date": "2021-07-28",
        "actual": 83,
        "yhat_lower": 61,
        "yhat_upper": 148,
        "yhat": 104
    },
    {
        "Date": "2021-07-29",
        "actual": 83,
        "yhat_lower": 81,
        "yhat_upper": 167,
        "yhat": 123
    },
    {
        "Date": "2021-07-30",
        "actual": 121,
        "yhat_lower": 83,
        "yhat_upper": 165,
        "yhat": 123
    },
    {
        "Date": "2021-07-31",
        "actual": 65,
        "yhat_lower": 51,
        "yhat_upper": 136,
        "yhat": 94
    },
    {
        "Date": "2021-08-01",
        "actual": 76,
        "yhat_lower": 38,
        "yhat_upper": 120,
        "yhat": 80
    },
    {
        "Date": "2021-08-02",
        "actual": 150,
        "yhat_lower": 71,
        "yhat_upper": 156,
        "yhat": 115
    },
    {
        "Date": "2021-08-03",
        "actual": 168,
        "yhat_lower": 76,
        "yhat_upper": 158,
        "yhat": 116
    },
    {
        "Date": "2021-08-04",
        "actual": 123,
        "yhat_lower": 67,
        "yhat_upper": 154,
        "yhat": 110
    },
    {
        "Date": "2021-08-05",
        "actual": 148,
        "yhat_lower": 90,
        "yhat_upper": 171,
        "yhat": 130
    },
    {
        "Date": "2021-08-06",
        "actual": 137,
        "yhat_lower": 89,
        "yhat_upper": 172,
        "yhat": 129
    },
    {
        "Date": "2021-08-07",
        "actual": 103,
        "yhat_lower": 60,
        "yhat_upper": 143,
        "yhat": 101
    },
    {
        "Date": "2021-08-08",
        "actual": 72,
        "yhat_lower": 45,
        "yhat_upper": 129,
        "yhat": 86
    },
    {
        "Date": "2021-08-09",
        "actual": 168,
        "yhat_lower": 76,
        "yhat_upper": 163,
        "yhat": 121
    },
    {
        "Date": "2021-08-10",
        "actual": 123,
        "yhat_lower": 82,
        "yhat_upper": 165,
        "yhat": 122
    },
    {
        "Date": "2021-08-11",
        "actual": 157,
        "yhat_lower": 74,
        "yhat_upper": 159,
        "yhat": 116
    },
    {
        "Date": "2021-08-12",
        "actual": 144,
        "yhat_lower": 93,
        "yhat_upper": 178,
        "yhat": 135
    },
    {
        "Date": "2021-08-13",
        "actual": 158,
        "yhat_lower": 93,
        "yhat_upper": 178,
        "yhat": 135
    },
    {
        "Date": "2021-08-14",
        "actual": 139,
        "yhat_lower": 66,
        "yhat_upper": 147,
        "yhat": 105
    },
    {
        "Date": "2021-08-15",
        "actual": 95,
        "yhat_lower": 47,
        "yhat_upper": 133,
        "yhat": 90
    },
    {
        "Date": "2021-08-16",
        "actual": 166,
        "yhat_lower": 87,
        "yhat_upper": 163,
        "yhat": 124
    },
    {
        "Date": "2021-08-17",
        "actual": 155,
        "yhat_lower": 83,
        "yhat_upper": 168,
        "yhat": 125
    },
    {
        "Date": "2021-08-18",
        "actual": 136,
        "yhat_lower": 73,
        "yhat_upper": 160,
        "yhat": 118
    },
    {
        "Date": "2021-08-19",
        "actual": 150,
        "yhat_lower": 96,
        "yhat_upper": 176,
        "yhat": 136
    },
    {
        "Date": "2021-08-20",
        "actual": 163,
        "yhat_lower": 92,
        "yhat_upper": 177,
        "yhat": 135
    },
    {
        "Date": "2021-08-21",
        "actual": 98,
        "yhat_lower": 63,
        "yhat_upper": 146,
        "yhat": 105
    },
    {
        "Date": "2021-08-22",
        "actual": 56,
        "yhat_lower": 47,
        "yhat_upper": 134,
        "yhat": 89
    },
    {
        "Date": "2021-08-23",
        "actual": 127,
        "yhat_lower": 81,
        "yhat_upper": 164,
        "yhat": 122
    },
    {
        "Date": "2021-08-24",
        "actual": 163,
        "yhat_lower": 80,
        "yhat_upper": 164,
        "yhat": 122
    },
    {
        "Date": "2021-08-25",
        "actual": 159,
        "yhat_lower": 73,
        "yhat_upper": 157,
        "yhat": 114
    },
    {
        "Date": "2021-08-26",
        "actual": 119,
        "yhat_lower": 90,
        "yhat_upper": 175,
        "yhat": 132
    },
    {
        "Date": "2021-08-27",
        "actual": 178,
        "yhat_lower": 86,
        "yhat_upper": 175,
        "yhat": 130
    },
    {
        "Date": "2021-08-28",
        "actual": 90,
        "yhat_lower": 59,
        "yhat_upper": 140,
        "yhat": 99
    },
    {
        "Date": "2021-08-29",
        "actual": 103,
        "yhat_lower": 40,
        "yhat_upper": 125,
        "yhat": 83
    },
    {
        "Date": "2021-08-30",
        "actual": 161,
        "yhat_lower": 74,
        "yhat_upper": 159,
        "yhat": 116
    },
    {
        "Date": "2021-08-31",
        "actual": 110,
        "yhat_lower": 74,
        "yhat_upper": 158,
        "yhat": 116
    },
    {
        "Date": "2021-09-01",
        "actual": 130,
        "yhat_lower": 66,
        "yhat_upper": 150,
        "yhat": 109
    },
    {
        "Date": "2021-09-02",
        "actual": 153,
        "yhat_lower": 83,
        "yhat_upper": 171,
        "yhat": 127
    },
    {
        "Date": "2021-09-03",
        "actual": 152,
        "yhat_lower": 82,
        "yhat_upper": 168,
        "yhat": 125
    },
    {
        "Date": "2021-09-04",
        "actual": 101,
        "yhat_lower": 52,
        "yhat_upper": 136,
        "yhat": 95
    },
    {
        "Date": "2021-09-05",
        "actual": 58,
        "yhat_lower": 39,
        "yhat_upper": 121,
        "yhat": 80
    },
    {
        "Date": "2021-09-06",
        "actual": 73,
        "yhat_lower": 71,
        "yhat_upper": 157,
        "yhat": 113
    },
    {
        "Date": "2021-09-07",
        "actual": 153,
        "yhat_lower": 72,
        "yhat_upper": 155,
        "yhat": 114
    },
    {
        "Date": "2021-09-08",
        "actual": 148,
        "yhat_lower": 69,
        "yhat_upper": 149,
        "yhat": 107
    },
    {
        "Date": "2021-09-09",
        "actual": 129,
        "yhat_lower": 86,
        "yhat_upper": 168,
        "yhat": 126
    },
    {
        "Date": "2021-09-10",
        "actual": 181,
        "yhat_lower": 85,
        "yhat_upper": 165,
        "yhat": 126
    },
    {
        "Date": "2021-09-11",
        "actual": 115,
        "yhat_lower": 54,
        "yhat_upper": 137,
        "yhat": 96
    },
    {
        "Date": "2021-09-12",
        "actual": 116,
        "yhat_lower": 42,
        "yhat_upper": 123,
        "yhat": 82
    },
    {
        "Date": "2021-09-13",
        "actual": 120,
        "yhat_lower": 75,
        "yhat_upper": 155,
        "yhat": 116
    },
    {
        "Date": "2021-09-14",
        "actual": 140,
        "yhat_lower": 77,
        "yhat_upper": 159,
        "yhat": 118
    },
    {
        "Date": "2021-09-15",
        "actual": 129,
        "yhat_lower": 68,
        "yhat_upper": 157,
        "yhat": 112
    },
    {
        "Date": "2021-09-16",
        "actual": 152,
        "yhat_lower": 92,
        "yhat_upper": 173,
        "yhat": 131
    },
    {
        "Date": "2021-09-17",
        "actual": 156,
        "yhat_lower": 89,
        "yhat_upper": 172,
        "yhat": 131
    },
    {
        "Date": "2021-09-18",
        "actual": 119,
        "yhat_lower": 58,
        "yhat_upper": 143,
        "yhat": 102
    },
    {
        "Date": "2021-09-19",
        "actual": 88,
        "yhat_lower": 50,
        "yhat_upper": 128,
        "yhat": 88
    },
    {
        "Date": "2021-09-20",
        "actual": 167,
        "yhat_lower": 81,
        "yhat_upper": 165,
        "yhat": 122
    },
    {
        "Date": "2021-09-21",
        "actual": 160,
        "yhat_lower": 83,
        "yhat_upper": 167,
        "yhat": 124
    },
    {
        "Date": "2021-09-22",
        "actual": 129,
        "yhat_lower": 79,
        "yhat_upper": 160,
        "yhat": 117
    },
    {
        "Date": "2021-09-23",
        "actual": 136,
        "yhat_lower": 97,
        "yhat_upper": 178,
        "yhat": 137
    },
    {
        "Date": "2021-09-24",
        "actual": 152,
        "yhat_lower": 96,
        "yhat_upper": 177,
        "yhat": 136
    },
    {
        "Date": "2021-09-25",
        "actual": 108,
        "yhat_lower": 64,
        "yhat_upper": 148,
        "yhat": 107
    },
    {
        "Date": "2021-09-26",
        "actual": 88,
        "yhat_lower": 48,
        "yhat_upper": 132,
        "yhat": 92
    },
    {
        "Date": "2021-09-27",
        "actual": 179,
        "yhat_lower": 82,
        "yhat_upper": 166,
        "yhat": 126
    },
    {
        "Date": "2021-09-28",
        "actual": 147,
        "yhat_lower": 85,
        "yhat_upper": 167,
        "yhat": 126
    },
    {
        "Date": "2021-09-29",
        "actual": 139,
        "yhat_lower": 74,
        "yhat_upper": 158,
        "yhat": 119
    },
    {
        "Date": "2021-09-30",
        "actual": 143,
        "yhat_lower": 96,
        "yhat_upper": 180,
        "yhat": 137
    },
    {
        "Date": "2021-10-01",
        "actual": 172,
        "yhat_lower": 93,
        "yhat_upper": 176,
        "yhat": 136
    },
    {
        "Date": "2021-10-02",
        "actual": 137,
        "yhat_lower": 67,
        "yhat_upper": 149,
        "yhat": 105
    },
    {
        "Date": "2021-10-03",
        "actual": 88,
        "yhat_lower": 46,
        "yhat_upper": 132,
        "yhat": 89
    },
    {
        "Date": "2021-10-04",
        "actual": 111,
        "yhat_lower": 83,
        "yhat_upper": 163,
        "yhat": 122
    },
    {
        "Date": "2021-10-05",
        "actual": 138,
        "yhat_lower": 77,
        "yhat_upper": 161,
        "yhat": 122
    },
    {
        "Date": "2021-10-06",
        "actual": 139,
        "yhat_lower": 71,
        "yhat_upper": 157,
        "yhat": 114
    },
    {
        "Date": "2021-10-07",
        "actual": 124,
        "yhat_lower": 89,
        "yhat_upper": 171,
        "yhat": 132
    },
    {
        "Date": "2021-10-08",
        "actual": 144,
        "yhat_lower": 89,
        "yhat_upper": 173,
        "yhat": 129
    },
    {
        "Date": "2021-10-09",
        "actual": 102,
        "yhat_lower": 58,
        "yhat_upper": 143,
        "yhat": 98
    },
    {
        "Date": "2021-10-10",
        "actual": 74,
        "yhat_lower": 42,
        "yhat_upper": 124,
        "yhat": 82
    },
    {
        "Date": "2021-10-11",
        "actual": 149,
        "yhat_lower": 77,
        "yhat_upper": 159,
        "yhat": 115
    },
    {
        "Date": "2021-10-12",
        "actual": 144,
        "yhat_lower": 74,
        "yhat_upper": 156,
        "yhat": 114
    },
    {
        "Date": "2021-10-13",
        "actual": 115,
        "yhat_lower": 64,
        "yhat_upper": 149,
        "yhat": 106
    },
    {
        "Date": "2021-10-14",
        "actual": 115,
        "yhat_lower": 84,
        "yhat_upper": 165,
        "yhat": 124
    },
    {
        "Date": "2021-10-15",
        "actual": 130,
        "yhat_lower": 78,
        "yhat_upper": 163,
        "yhat": 121
    },
    {
        "Date": "2021-10-16",
        "actual": 66,
        "yhat_lower": 50,
        "yhat_upper": 138,
        "yhat": 91
    },
    {
        "Date": "2021-10-17",
        "actual": 54,
        "yhat_lower": 33,
        "yhat_upper": 116,
        "yhat": 75
    },
    {
        "Date": "2021-10-18",
        "actual": 110,
        "yhat_lower": 67,
        "yhat_upper": 147,
        "yhat": 108
    },
    {
        "Date": "2021-10-19",
        "actual": 86,
        "yhat_lower": 62,
        "yhat_upper": 151,
        "yhat": 108
    },
    {
        "Date": "2021-10-20",
        "actual": 102,
        "yhat_lower": 55,
        "yhat_upper": 143,
        "yhat": 100
    },
    {
        "Date": "2021-10-21",
        "actual": 107,
        "yhat_lower": 76,
        "yhat_upper": 159,
        "yhat": 119
    },
    {
        "Date": "2021-10-22",
        "actual": 131,
        "yhat_lower": 74,
        "yhat_upper": 158,
        "yhat": 117
    },
    {
        "Date": "2021-10-23",
        "actual": 90,
        "yhat_lower": 45,
        "yhat_upper": 128,
        "yhat": 87
    },
    {
        "Date": "2021-10-24",
        "actual": 57,
        "yhat_lower": 28,
        "yhat_upper": 116,
        "yhat": 72
    },
    {
        "Date": "2021-10-25",
        "actual": 102,
        "yhat_lower": 64,
        "yhat_upper": 151,
        "yhat": 106
    },
    {
        "Date": "2021-10-26",
        "actual": 93,
        "yhat_lower": 66,
        "yhat_upper": 150,
        "yhat": 107
    },
    {
        "Date": "2021-10-27",
        "actual": 108,
        "yhat_lower": 59,
        "yhat_upper": 142,
        "yhat": 100
    },
    {
        "Date": "2021-10-28",
        "actual": 88,
        "yhat_lower": 79,
        "yhat_upper": 161,
        "yhat": 120
    },
    {
        "Date": "2021-10-29",
        "actual": 120,
        "yhat_lower": 76,
        "yhat_upper": 162,
        "yhat": 119
    },
    {
        "Date": "2021-10-30",
        "actual": 73,
        "yhat_lower": 48,
        "yhat_upper": 131,
        "yhat": 90
    },
    {
        "Date": "2021-10-31",
        "actual": 57,
        "yhat_lower": 32,
        "yhat_upper": 116,
        "yhat": 76
    },
    {
        "Date": "2021-11-01",
        "actual": 98,
        "yhat_lower": 70,
        "yhat_upper": 151,
        "yhat": 111
    },
    {
        "Date": "2021-11-02",
        "actual": 102,
        "yhat_lower": 70,
        "yhat_upper": 157,
        "yhat": 113
    },
    {
        "Date": "2021-11-03",
        "actual": 104,
        "yhat_lower": 64,
        "yhat_upper": 148,
        "yhat": 107
    },
    {
        "Date": "2021-11-04",
        "actual": 101,
        "yhat_lower": 83,
        "yhat_upper": 169,
        "yhat": 127
    },
    {
        "Date": "2021-11-05",
        "actual": 124,
        "yhat_lower": 85,
        "yhat_upper": 169,
        "yhat": 127
    },
    {
        "Date": "2021-11-06",
        "actual": 112,
        "yhat_lower": 57,
        "yhat_upper": 142,
        "yhat": 99
    },
    {
        "Date": "2021-11-07",
        "actual": 94,
        "yhat_lower": 42,
        "yhat_upper": 130,
        "yhat": 85
    },
    {
        "Date": "2021-11-08",
        "actual": 127,
        "yhat_lower": 75,
        "yhat_upper": 164,
        "yhat": 121
    },
    {
        "Date": "2021-11-09",
        "actual": 106,
        "yhat_lower": 80,
        "yhat_upper": 162,
        "yhat": 123
    },
    {
        "Date": "2021-11-10",
        "actual": 114,
        "yhat_lower": 78,
        "yhat_upper": 160,
        "yhat": 118
    },
    {
        "Date": "2021-11-11",
        "actual": 98,
        "yhat_lower": 96,
        "yhat_upper": 178,
        "yhat": 139
    },
    {
        "Date": "2021-11-12",
        "actual": 125,
        "yhat_lower": 97,
        "yhat_upper": 182,
        "yhat": 139
    },
    {
        "Date": "2021-11-13",
        "actual": 96,
        "yhat_lower": 71,
        "yhat_upper": 152,
        "yhat": 111
    },
    {
        "Date": "2021-11-14",
        "actual": 69,
        "yhat_lower": 57,
        "yhat_upper": 141,
        "yhat": 98
    },
    {
        "Date": "2021-11-15",
        "actual": 154,
        "yhat_lower": 93,
        "yhat_upper": 179,
        "yhat": 134
    },
    {
        "Date": "2021-11-16",
        "actual": 132,
        "yhat_lower": 94,
        "yhat_upper": 177,
        "yhat": 137
    },
    {
        "Date": "2021-11-17",
        "actual": 167,
        "yhat_lower": 90,
        "yhat_upper": 175,
        "yhat": 132
    },
    {
        "Date": "2021-11-18",
        "actual": 152,
        "yhat_lower": 113,
        "yhat_upper": 194,
        "yhat": 153
    },
    {
        "Date": "2021-11-19",
        "actual": 199,
        "yhat_lower": 110,
        "yhat_upper": 199,
        "yhat": 154
    },
    {
        "Date": "2021-11-20",
        "actual": 129,
        "yhat_lower": 87,
        "yhat_upper": 167,
        "yhat": 127
    },
    {
        "Date": "2021-11-21",
        "actual": 113,
        "yhat_lower": 72,
        "yhat_upper": 157,
        "yhat": 114
    },
    {
        "Date": "2021-11-22",
        "actual": 210,
        "yhat_lower": 109,
        "yhat_upper": 191,
        "yhat": 150
    },
    {
        "Date": "2021-11-23",
        "actual": 159,
        "yhat_lower": 112,
        "yhat_upper": 194,
        "yhat": 153
    },
    {
        "Date": "2021-11-24",
        "actual": 191,
        "yhat_lower": 106,
        "yhat_upper": 190,
        "yhat": 149
    },
    {
        "Date": "2021-11-25",
        "actual": 53,
        "yhat_lower": 128,
        "yhat_upper": 208,
        "yhat": 170
    },
    {
        "Date": "2021-11-26",
        "actual": 134,
        "yhat_lower": 126,
        "yhat_upper": 213,
        "yhat": 171
    },
    {
        "Date": "2021-11-27",
        "actual": 112,
        "yhat_lower": 102,
        "yhat_upper": 183,
        "yhat": 144
    },
    {
        "Date": "2021-11-28",
        "actual": 142,
        "yhat_lower": 89,
        "yhat_upper": 173,
        "yhat": 131
    },
    {
        "Date": "2021-11-29",
        "actual": 197,
        "yhat_lower": 124,
        "yhat_upper": 210,
        "yhat": 168
    },
    {
        "Date": "2021-11-30",
        "actual": 236,
        "yhat_lower": 127,
        "yhat_upper": 212,
        "yhat": 171
    },
    {
        "Date": "2021-12-01",
        "actual": 179,
        "yhat_lower": 122,
        "yhat_upper": 208,
        "yhat": 166
    },
    {
        "Date": "2021-12-02",
        "actual": 179,
        "yhat_lower": 144,
        "yhat_upper": 232,
        "yhat": 188
    },
    {
        "Date": "2021-12-03",
        "actual": 248,
        "yhat_lower": 145,
        "yhat_upper": 231,
        "yhat": 189
    },
    {
        "Date": "2021-12-04",
        "actual": 175,
        "yhat_lower": 117,
        "yhat_upper": 205,
        "yhat": 162
    },
    {
        "Date": "2021-12-05",
        "actual": 177,
        "yhat_lower": 106,
        "yhat_upper": 190,
        "yhat": 149
    },
    {
        "Date": "2021-12-06",
        "actual": 236,
        "yhat_lower": 142,
        "yhat_upper": 228,
        "yhat": 185
    },
    {
        "Date": "2021-12-07",
        "actual": 223,
        "yhat_lower": 146,
        "yhat_upper": 228,
        "yhat": 188
    },
    {
        "Date": "2021-12-08",
        "actual": 206,
        "yhat_lower": 145,
        "yhat_upper": 225,
        "yhat": 184
    },
    {
        "Date": "2021-12-09",
        "actual": 188,
        "yhat_lower": 162,
        "yhat_upper": 245,
        "yhat": 205
    },
    {
        "Date": "2021-12-10",
        "actual": 214,
        "yhat_lower": 163,
        "yhat_upper": 250,
        "yhat": 206
    },
    {
        "Date": "2021-12-11",
        "actual": 149,
        "yhat_lower": 136,
        "yhat_upper": 219,
        "yhat": 179
    },
    {
        "Date": "2021-12-12",
        "actual": 110,
        "yhat_lower": 124,
        "yhat_upper": 208,
        "yhat": 166
    },
    {
        "Date": "2021-12-13",
        "actual": 257,
        "yhat_lower": 163,
        "yhat_upper": 243,
        "yhat": 203
    },
    {
        "Date": "2021-12-14",
        "actual": 282,
        "yhat_lower": 165,
        "yhat_upper": 250,
        "yhat": 205
    },
    {
        "Date": "2021-12-15",
        "actual": 235,
        "yhat_lower": 160,
        "yhat_upper": 248,
        "yhat": 201
    },
    {
        "Date": "2021-12-16",
        "actual": 265,
        "yhat_lower": 178,
        "yhat_upper": 264,
        "yhat": 222
    },
    {
        "Date": "2021-12-17",
        "actual": 445,
        "yhat_lower": 184,
        "yhat_upper": 264,
        "yhat": 223
    },
    {
        "Date": "2021-12-18",
        "actual": 204,
        "yhat_lower": 153,
        "yhat_upper": 240,
        "yhat": 195
    },
    {
        "Date": "2021-12-19",
        "actual": 216,
        "yhat_lower": 138,
        "yhat_upper": 224,
        "yhat": 182
    },
    {
        "Date": "2021-12-20",
        "actual": 331,
        "yhat_lower": 177,
        "yhat_upper": 259,
        "yhat": 217
    },
    {
        "Date": "2021-12-21",
        "actual": 338,
        "yhat_lower": 177,
        "yhat_upper": 263,
        "yhat": 220
    },
    {
        "Date": "2021-12-22",
        "actual": 257,
        "yhat_lower": 173,
        "yhat_upper": 257,
        "yhat": 214
    },
    {
        "Date": "2021-12-23",
        "actual": 330,
        "yhat_lower": 192,
        "yhat_upper": 276,
        "yhat": 234
    },
    {
        "Date": "2021-12-24",
        "actual": 185,
        "yhat_lower": 190,
        "yhat_upper": 277,
        "yhat": 234
    },
    {
        "Date": "2021-12-25",
        "actual": 130,
        "yhat_lower": 163,
        "yhat_upper": 245,
        "yhat": 205
    },
    {
        "Date": "2021-12-26",
        "actual": 137,
        "yhat_lower": 148,
        "yhat_upper": 230,
        "yhat": 191
    },
    {
        "Date": "2021-12-27",
        "actual": 248,
        "yhat_lower": 181,
        "yhat_upper": 266,
        "yhat": 225
    },
    {
        "Date": "2021-12-28",
        "actual": 287,
        "yhat_lower": 180,
        "yhat_upper": 266,
        "yhat": 225
    },
    {
        "Date": "2021-12-29",
        "actual": 276,
        "yhat_lower": 176,
        "yhat_upper": 262,
        "yhat": 218
    },
    {
        "Date": "2021-12-30",
        "actual": 283,
        "yhat_lower": 191,
        "yhat_upper": 279,
        "yhat": 236
    },
    {
        "Date": "2021-12-31",
        "actual": 216,
        "yhat_lower": 195,
        "yhat_upper": 275,
        "yhat": 234
    },
    {
        "Date": "2022-01-01",
        "actual": 129,
        "yhat_lower": 163,
        "yhat_upper": 244,
        "yhat": 203
    },
    {
        "Date": "2022-01-02",
        "actual": 209,
        "yhat_lower": 145,
        "yhat_upper": 228,
        "yhat": 186
    },
    {
        "Date": "2022-01-03",
        "actual": 283,
        "yhat_lower": 176,
        "yhat_upper": 259,
        "yhat": 218
    },
    {
        "Date": "2022-01-04",
        "actual": 304,
        "yhat_lower": 174,
        "yhat_upper": 258,
        "yhat": 216
    },
    {
        "Date": "2022-01-05",
        "actual": 262,
        "yhat_lower": 162,
        "yhat_upper": 245,
        "yhat": 206
    },
    {
        "Date": "2022-01-06",
        "actual": 236,
        "yhat_lower": 183,
        "yhat_upper": 264,
        "yhat": 221
    },
    {
        "Date": "2022-01-07",
        "actual": 179,
        "yhat_lower": 175,
        "yhat_upper": 258,
        "yhat": 216
    },
    {
        "Date": "2022-01-08",
        "actual": 234,
        "yhat_lower": 143,
        "yhat_upper": 228,
        "yhat": 183
    },
    {
        "Date": "2022-01-09",
        "actual": 211,
        "yhat_lower": 123,
        "yhat_upper": 204,
        "yhat": 163
    },
    {
        "Date": "2022-01-10",
        "actual": 299,
        "yhat_lower": 152,
        "yhat_upper": 235,
        "yhat": 192
    },
    {
        "Date": "2022-01-11",
        "actual": 212,
        "yhat_lower": 146,
        "yhat_upper": 229,
        "yhat": 188
    },
    {
        "Date": "2022-01-12",
        "actual": 190,
        "yhat_lower": 133,
        "yhat_upper": 219,
        "yhat": 176
    },
    {
        "Date": "2022-01-13",
        "actual": 187,
        "yhat_lower": 148,
        "yhat_upper": 229,
        "yhat": 189
    },
    {
        "Date": "2022-01-14",
        "actual": 203,
        "yhat_lower": 139,
        "yhat_upper": 226,
        "yhat": 182
    },
    {
        "Date": "2022-01-15",
        "actual": 143,
        "yhat_lower": 106,
        "yhat_upper": 188,
        "yhat": 147
    },
    {
        "Date": "2022-01-16",
        "actual": 105,
        "yhat_lower": 86,
        "yhat_upper": 167,
        "yhat": 126
    },
    {
        "Date": "2022-01-17",
        "actual": 164,
        "yhat_lower": 112,
        "yhat_upper": 196,
        "yhat": 154
    },
    {
        "Date": "2022-01-18",
        "actual": 133,
        "yhat_lower": 106,
        "yhat_upper": 189,
        "yhat": 149
    },
    {
        "Date": "2022-01-19",
        "actual": 97,
        "yhat_lower": 90,
        "yhat_upper": 176,
        "yhat": 136
    },
    {
        "Date": "2022-01-20",
        "actual": 93,
        "yhat_lower": 106,
        "yhat_upper": 194,
        "yhat": 150
    },
    {
        "Date": "2022-01-21",
        "actual": 114,
        "yhat_lower": 101,
        "yhat_upper": 184,
        "yhat": 143
    },
    {
        "Date": "2022-01-22",
        "actual": 111,
        "yhat_lower": 67,
        "yhat_upper": 148,
        "yhat": 108
    },
    {
        "Date": "2022-01-23",
        "actual": 66,
        "yhat_lower": 47,
        "yhat_upper": 130,
        "yhat": 88
    },
    {
        "Date": "2022-01-24",
        "actual": 94,
        "yhat_lower": 74,
        "yhat_upper": 159,
        "yhat": 117
    },
    {
        "Date": "2022-01-25",
        "actual": 85,
        "yhat_lower": 67,
        "yhat_upper": 156,
        "yhat": 113
    },
    {
        "Date": "2022-01-26",
        "actual": 63,
        "yhat_lower": 58,
        "yhat_upper": 146,
        "yhat": 102
    },
    {
        "Date": "2022-01-27",
        "actual": 75,
        "yhat_lower": 75,
        "yhat_upper": 158,
        "yhat": 117
    },
    {
        "Date": "2022-01-28",
        "actual": 79,
        "yhat_lower": 67,
        "yhat_upper": 154,
        "yhat": 112
    },
    {
        "Date": "2022-01-30",
        "actual": 64,
        "yhat_lower": 19,
        "yhat_upper": 102,
        "yhat": 62
    },
    {
        "Date": "2022-01-31",
        "actual": 74,
        "yhat_lower": 51,
        "yhat_upper": 136,
        "yhat": 93
    },
    {
        "Date": "2022-02-01",
        "actual": 68,
        "yhat_lower": 52,
        "yhat_upper": 134,
        "yhat": 92
    },
    {
        "Date": "2022-02-02",
        "actual": 56,
        "yhat_lower": 40,
        "yhat_upper": 126,
        "yhat": 83
    },
    {
        "Date": "2022-02-03",
        "actual": 46,
        "yhat_lower": 57,
        "yhat_upper": 143,
        "yhat": 101
    },
    {
        "Date": "2022-02-04",
        "actual": 85,
        "yhat_lower": 57,
        "yhat_upper": 139,
        "yhat": 98
    },
    {
        "Date": "2022-02-05",
        "actual": 73,
        "yhat_lower": 25,
        "yhat_upper": 109,
        "yhat": 68
    },
    {
        "Date": "2022-02-06",
        "actual": 39,
        "yhat_lower": 9,
        "yhat_upper": 95,
        "yhat": 52
    },
    {
        "Date": "2022-02-07",
        "actual": 57,
        "yhat_lower": 47,
        "yhat_upper": 127,
        "yhat": 85
    },
    {
        "Date": "2022-02-08",
        "actual": 54,
        "yhat_lower": 46,
        "yhat_upper": 127,
        "yhat": 86
    },
    {
        "Date": "2022-02-09",
        "actual": 38,
        "yhat_lower": 38,
        "yhat_upper": 120,
        "yhat": 78
    },
    {
        "Date": "2022-02-10",
        "actual": 69,
        "yhat_lower": 58,
        "yhat_upper": 140,
        "yhat": 97
    },
    {
        "Date": "2022-02-11",
        "actual": 51,
        "yhat_lower": 56,
        "yhat_upper": 135,
        "yhat": 96
    },
    {
        "Date": "2022-02-12",
        "actual": 49,
        "yhat_lower": 26,
        "yhat_upper": 105,
        "yhat": 66
    },
    {
        "Date": "2022-02-13",
        "actual": 39,
        "yhat_lower": 7,
        "yhat_upper": 95,
        "yhat": 51
    },
    {
        "Date": "2022-02-14",
        "actual": 67,
        "yhat_lower": 41,
        "yhat_upper": 126,
        "yhat": 85
    },
    {
        "Date": "2022-02-15",
        "actual": 51,
        "yhat_lower": 43,
        "yhat_upper": 127,
        "yhat": 85
    },
    {
        "Date": "2022-02-16",
        "actual": 48,
        "yhat_lower": 35,
        "yhat_upper": 122,
        "yhat": 78
    },
    {
        "Date": "2022-02-17",
        "actual": 62,
        "yhat_lower": 57,
        "yhat_upper": 141,
        "yhat": 96
    },
    {
        "Date": "2022-02-18",
        "actual": 78,
        "yhat_lower": 54,
        "yhat_upper": 135,
        "yhat": 94
    },
    {
        "Date": "2022-02-19",
        "actual": 68,
        "yhat_lower": 20,
        "yhat_upper": 109,
        "yhat": 64
    },
    {
        "Date": "2022-02-20",
        "actual": 41,
        "yhat_lower": 9,
        "yhat_upper": 91,
        "yhat": 48
    },
    {
        "Date": "2022-02-21",
        "actual": 52,
        "yhat_lower": 39,
        "yhat_upper": 123,
        "yhat": 81
    },
    {
        "Date": "2022-02-22",
        "actual": 53,
        "yhat_lower": 39,
        "yhat_upper": 120,
        "yhat": 81
    },
    {
        "Date": "2022-02-23",
        "actual": 48,
        "yhat_lower": 33,
        "yhat_upper": 117,
        "yhat": 73
    },
    {
        "Date": "2022-02-24",
        "actual": 32,
        "yhat_lower": 48,
        "yhat_upper": 133,
        "yhat": 90
    },
    {
        "Date": "2022-02-25",
        "actual": 44,
        "yhat_lower": 47,
        "yhat_upper": 129,
        "yhat": 88
    },
    {
        "Date": "2022-02-26",
        "actual": 33,
        "yhat_lower": 17,
        "yhat_upper": 96,
        "yhat": 57
    },
    {
        "Date": "2022-02-27",
        "actual": 40,
        "yhat_lower": -1,
        "yhat_upper": 84,
        "yhat": 41
    },
    {
        "Date": "2022-02-28",
        "actual": 52,
        "yhat_lower": 34,
        "yhat_upper": 119,
        "yhat": 73
    },
    {
        "Date": "2022-03-01",
        "actual": 39,
        "yhat_lower": 28,
        "yhat_upper": 115,
        "yhat": 73
    },
    {
        "Date": "2022-03-02",
        "actual": 26,
        "yhat_lower": 23,
        "yhat_upper": 105,
        "yhat": 65
    },
    {
        "Date": "2022-03-03",
        "actual": 32,
        "yhat_lower": 43,
        "yhat_upper": 125,
        "yhat": 83
    },
    {
        "Date": "2022-03-04",
        "actual": 38,
        "yhat_lower": 39,
        "yhat_upper": 121,
        "yhat": 80
    },
    {
        "Date": "2022-03-05",
        "actual": 39,
        "yhat_lower": 10,
        "yhat_upper": 92,
        "yhat": 50
    },
    {
        "Date": "2022-03-06",
        "actual": 20,
        "yhat_lower": -5,
        "yhat_upper": 76,
        "yhat": 34
    },
    {
        "Date": "2022-03-07",
        "actual": 52,
        "yhat_lower": 27,
        "yhat_upper": 111,
        "yhat": 68
    },
    {
        "Date": "2022-03-08",
        "actual": 52,
        "yhat_lower": 27,
        "yhat_upper": 111,
        "yhat": 68
    },
    {
        "Date": "2022-03-09",
        "actual": 42,
        "yhat_lower": 18,
        "yhat_upper": 101,
        "yhat": 61
    },
    {
        "Date": "2022-03-10",
        "actual": 39,
        "yhat_lower": 39,
        "yhat_upper": 123,
        "yhat": 80
    },
    {
        "Date": "2022-03-11",
        "actual": 34,
        "yhat_lower": 39,
        "yhat_upper": 122,
        "yhat": 79
    },
    {
        "Date": "2022-03-12",
        "actual": 39,
        "yhat_lower": 10,
        "yhat_upper": 92,
        "yhat": 50
    },
    {
        "Date": "2022-03-13",
        "actual": 31,
        "yhat_lower": -6,
        "yhat_upper": 78,
        "yhat": 35
    },
    {
        "Date": "2022-03-14",
        "actual": 56,
        "yhat_lower": 25,
        "yhat_upper": 111,
        "yhat": 70
    },
    {
        "Date": "2022-03-15",
        "actual": 63,
        "yhat_lower": 31,
        "yhat_upper": 113,
        "yhat": 71
    },
    {
        "Date": "2022-03-16",
        "actual": 51,
        "yhat_lower": 20,
        "yhat_upper": 104,
        "yhat": 65
    },
    {
        "Date": "2022-03-17",
        "actual": 31,
        "yhat_lower": 42,
        "yhat_upper": 126,
        "yhat": 85
    },
    {
        "Date": "2022-03-18",
        "actual": 37,
        "yhat_lower": 43,
        "yhat_upper": 127,
        "yhat": 85
    },
    {
        "Date": "2022-03-19",
        "actual": 61,
        "yhat_lower": 13,
        "yhat_upper": 97,
        "yhat": 57
    },
    {
        "Date": "2022-03-20",
        "actual": 44,
        "yhat_lower": -1,
        "yhat_upper": 88,
        "yhat": 42
    },
    {
        "Date": "2022-03-21",
        "actual": 59,
        "yhat_lower": 34,
        "yhat_upper": 119,
        "yhat": 77
    },
    {
        "Date": "2022-03-22",
        "actual": 57,
        "yhat_lower": 35,
        "yhat_upper": 122,
        "yhat": 79
    },
    {
        "Date": "2022-03-23",
        "actual": 38,
        "yhat_lower": 32,
        "yhat_upper": 112,
        "yhat": 73
    },
    {
        "Date": "2022-03-24",
        "actual": 39,
        "yhat_lower": 48,
        "yhat_upper": 132,
        "yhat": 92
    },
    {
        "Date": "2022-03-25",
        "actual": 48,
        "yhat_lower": 47,
        "yhat_upper": 132,
        "yhat": 92
    },
    {
        "Date": "2022-03-26",
        "actual": 36,
        "yhat_lower": 23,
        "yhat_upper": 107,
        "yhat": 63
    },
    {
        "Date": "2022-03-27",
        "actual": 33,
        "yhat_lower": 6,
        "yhat_upper": 88,
        "yhat": 48
    },
    {
        "Date": "2022-03-28",
        "actual": 50,
        "yhat_lower": 38,
        "yhat_upper": 123,
        "yhat": 81
    },
    {
        "Date": "2022-03-29",
        "actual": 59,
        "yhat_lower": 41,
        "yhat_upper": 122,
        "yhat": 82
    },
    {
        "Date": "2022-03-30",
        "actual": 21,
        "yhat_lower": 30,
        "yhat_upper": 116,
        "yhat": 75
    },
    {
        "Date": "2022-03-31",
        "actual": 48,
        "yhat_lower": 52,
        "yhat_upper": 137,
        "yhat": 93
    },
    {
        "Date": "2022-04-01",
        "actual": 42,
        "yhat_lower": 48,
        "yhat_upper": 129,
        "yhat": 91
    },
    {
        "Date": "2022-04-02",
        "actual": 43,
        "yhat_lower": 20,
        "yhat_upper": 103,
        "yhat": 60
    },
    {
        "Date": "2022-04-03",
        "actual": 31,
        "yhat_lower": 2,
        "yhat_upper": 86,
        "yhat": 44
    },
    {
        "Date": "2022-04-04",
        "actual": 57,
        "yhat_lower": 35,
        "yhat_upper": 119,
        "yhat": 76
    },
    {
        "Date": "2022-04-05",
        "actual": 48,
        "yhat_lower": 33,
        "yhat_upper": 117,
        "yhat": 75
    },
    {
        "Date": "2022-04-06",
        "actual": 55,
        "yhat_lower": 23,
        "yhat_upper": 108,
        "yhat": 67
    },
    {
        "Date": "2022-04-07",
        "actual": 34,
        "yhat_lower": 42,
        "yhat_upper": 124,
        "yhat": 84
    },
    {
        "Date": "2022-04-08",
        "actual": 41,
        "yhat_lower": 39,
        "yhat_upper": 125,
        "yhat": 81
    },
    {
        "Date": "2022-04-09",
        "actual": 48,
        "yhat_lower": 9,
        "yhat_upper": 91,
        "yhat": 49
    },
    {
        "Date": "2022-04-10",
        "actual": 19,
        "yhat_lower": -10,
        "yhat_upper": 74,
        "yhat": 32
    },
    {
        "Date": "2022-04-11",
        "actual": 71,
        "yhat_lower": 24,
        "yhat_upper": 105,
        "yhat": 64
    },
    {
        "Date": "2022-04-12",
        "actual": 57,
        "yhat_lower": 22,
        "yhat_upper": 107,
        "yhat": 63
    },
    {
        "Date": "2022-04-13",
        "actual": 53,
        "yhat_lower": 13,
        "yhat_upper": 96,
        "yhat": 54
    },
    {
        "Date": "2022-04-14",
        "actual": 46,
        "yhat_lower": 29,
        "yhat_upper": 111,
        "yhat": 71
    },
    {
        "Date": "2022-04-15",
        "actual": 58,
        "yhat_lower": 28,
        "yhat_upper": 110,
        "yhat": 68
    },
    {
        "Date": "2022-04-16",
        "actual": 38,
        "yhat_lower": -4,
        "yhat_upper": 79,
        "yhat": 37
    },
    {
        "Date": "2022-04-17",
        "actual": 23,
        "yhat_lower": -20,
        "yhat_upper": 64,
        "yhat": 20
    },
    {
        "Date": "2022-04-18",
        "actual": 51,
        "yhat_lower": 11,
        "yhat_upper": 95,
        "yhat": 53
    },
    {
        "Date": "2022-04-19",
        "actual": 45,
        "yhat_lower": 14,
        "yhat_upper": 95,
        "yhat": 52
    },
    {
        "Date": "2022-04-20",
        "actual": 50,
        "yhat_lower": 2,
        "yhat_upper": 88,
        "yhat": 44
    },
    {
        "Date": "2022-04-21",
        "actual": 39,
        "yhat_lower": 19,
        "yhat_upper": 104,
        "yhat": 62
    },
    {
        "Date": "2022-04-22",
        "actual": 60,
        "yhat_lower": 20,
        "yhat_upper": 102,
        "yhat": 60
    },
    {
        "Date": "2022-04-23",
        "actual": 29,
        "yhat_lower": -11,
        "yhat_upper": 71,
        "yhat": 30
    },
    {
        "Date": "2022-04-24",
        "actual": 32,
        "yhat_lower": -27,
        "yhat_upper": 58,
        "yhat": 14
    },
    {
        "Date": "2022-04-25",
        "actual": 58,
        "yhat_lower": 7,
        "yhat_upper": 88,
        "yhat": 47
    },
    {
        "Date": "2022-04-26",
        "actual": 62,
        "yhat_lower": 6,
        "yhat_upper": 88,
        "yhat": 48
    },
    {
        "Date": "2022-04-27",
        "actual": 42,
        "yhat_lower": 0,
        "yhat_upper": 85,
        "yhat": 41
    },
    {
        "Date": "2022-04-28",
        "actual": 49,
        "yhat_lower": 17,
        "yhat_upper": 102,
        "yhat": 59
    },
    {
        "Date": "2022-04-29",
        "actual": 61,
        "yhat_lower": 12,
        "yhat_upper": 99,
        "yhat": 58
    },
    {
        "Date": "2022-04-30",
        "actual": 35,
        "yhat_lower": -12,
        "yhat_upper": 70,
        "yhat": 28
    },
    {
        "Date": "2022-05-01",
        "actual": 31,
        "yhat_lower": -29,
        "yhat_upper": 54,
        "yhat": 13
    },
    {
        "Date": "2022-05-02",
        "actual": 68,
        "yhat_lower": 1,
        "yhat_upper": 89,
        "yhat": 46
    },
    {
        "Date": "2022-05-03",
        "actual": 55,
        "yhat_lower": 4,
        "yhat_upper": 86,
        "yhat": 47
    },
    {
        "Date": "2022-05-04",
        "actual": 43,
        "yhat_lower": 2,
        "yhat_upper": 82,
        "yhat": 40
    },
    {
        "Date": "2022-05-05",
        "actual": 38,
        "yhat_lower": 17,
        "yhat_upper": 102,
        "yhat": 58
    },
    {
        "Date": "2022-05-06",
        "actual": 52,
        "yhat_lower": 17,
        "yhat_upper": 97,
        "yhat": 56
    },
    {
        "Date": "2022-05-07",
        "actual": 59,
        "yhat_lower": -12,
        "yhat_upper": 69,
        "yhat": 26
    },
    {
        "Date": "2022-05-08",
        "actual": 31,
        "yhat_lower": -28,
        "yhat_upper": 54,
        "yhat": 11
    },
    {
        "Date": "2022-05-09",
        "actual": 61,
        "yhat_lower": 0,
        "yhat_upper": 87,
        "yhat": 44
    },
    {
        "Date": "2022-05-10",
        "actual": 69,
        "yhat_lower": 3,
        "yhat_upper": 81,
        "yhat": 44
    },
    {
        "Date": "2022-05-11",
        "actual": 39,
        "yhat_lower": -3,
        "yhat_upper": 78,
        "yhat": 37
    },
    {
        "Date": "2022-05-12",
        "actual": 57,
        "yhat_lower": 13,
        "yhat_upper": 96,
        "yhat": 55
    },
    {
        "Date": "2022-05-13",
        "actual": 51,
        "yhat_lower": 12,
        "yhat_upper": 95,
        "yhat": 53
    },
    {
        "Date": "2022-05-14",
        "actual": 44,
        "yhat_lower": -20,
        "yhat_upper": 62,
        "yhat": 22
    },
    {
        "Date": "2022-05-15",
        "actual": 28,
        "yhat_lower": -35,
        "yhat_upper": 46,
        "yhat": 6
    },
    {
        "Date": "2022-05-16",
        "actual": 62,
        "yhat_lower": -1,
        "yhat_upper": 82,
        "yhat": 39
    },
    {
        "Date": "2022-05-17",
        "actual": 63,
        "yhat_lower": -2,
        "yhat_upper": 81,
        "yhat": 39
    },
    {
        "Date": "2022-05-18",
        "actual": 40,
        "yhat_lower": -13,
        "yhat_upper": 72,
        "yhat": 31
    },
    {
        "Date": "2022-05-19",
        "actual": 53,
        "yhat_lower": 5,
        "yhat_upper": 89,
        "yhat": 49
    },
    {
        "Date": "2022-05-20",
        "actual": 31,
        "yhat_lower": 3,
        "yhat_upper": 90,
        "yhat": 46
    },
    {
        "Date": "2022-05-21",
        "actual": 40,
        "yhat_lower": -25,
        "yhat_upper": 58,
        "yhat": 16
    },
    {
        "Date": "2022-05-22",
        "actual": 40,
        "yhat_lower": -42,
        "yhat_upper": 40,
        "yhat": 0
    },
    {
        "Date": "2022-05-23",
        "actual": 65,
        "yhat_lower": -7,
        "yhat_upper": 74,
        "yhat": 32
    },
    {
        "Date": "2022-05-24",
        "actual": 62,
        "yhat_lower": -10,
        "yhat_upper": 71,
        "yhat": 32
    },
    {
        "Date": "2022-05-25",
        "actual": 50,
        "yhat_lower": -15,
        "yhat_upper": 67,
        "yhat": 24
    },
    {
        "Date": "2022-05-26",
        "actual": 50,
        "yhat_lower": 0,
        "yhat_upper": 85,
        "yhat": 42
    },
    {
        "Date": "2022-05-27",
        "actual": 33,
        "yhat_lower": -2,
        "yhat_upper": 80,
        "yhat": 40
    },
    {
        "Date": "2022-05-28",
        "actual": 39,
        "yhat_lower": -32,
        "yhat_upper": 48,
        "yhat": 10
    },
    {
        "Date": "2022-05-29",
        "actual": 22,
        "yhat_lower": -46,
        "yhat_upper": 37,
        "yhat": -5
    },
    {
        "Date": "2022-05-30",
        "actual": 35,
        "yhat_lower": -14,
        "yhat_upper": 69,
        "yhat": 28
    },
    {
        "Date": "2022-05-31",
        "actual": 43,
        "yhat_lower": -11,
        "yhat_upper": 70,
        "yhat": 28
    },
    {
        "Date": "2022-06-01",
        "actual": 37,
        "yhat_lower": -20,
        "yhat_upper": 61,
        "yhat": 20
    },
    {
        "Date": "2022-06-02",
        "actual": 38,
        "yhat_lower": -4,
        "yhat_upper": 79,
        "yhat": 39
    },
    {
        "Date": "2022-06-03",
        "actual": 33,
        "yhat_lower": -5,
        "yhat_upper": 80,
        "yhat": 37
    },
    {
        "Date": "2022-06-04",
        "actual": 39,
        "yhat_lower": -30,
        "yhat_upper": 50,
        "yhat": 7
    },
    {
        "Date": "2022-06-05",
        "actual": 31,
        "yhat_lower": -46,
        "yhat_upper": 34,
        "yhat": -7
    },
    {
        "Date": "2022-06-06",
        "actual": 64,
        "yhat_lower": -14,
        "yhat_upper": 66,
        "yhat": 26
    },
    {
        "Date": "2022-06-07",
        "actual": 47,
        "yhat_lower": -15,
        "yhat_upper": 67,
        "yhat": 26
    },
    {
        "Date": "2022-06-08",
        "actual": 30,
        "yhat_lower": -23,
        "yhat_upper": 60,
        "yhat": 19
    },
    {
        "Date": "2022-06-09",
        "actual": 28,
        "yhat_lower": -3,
        "yhat_upper": 81,
        "yhat": 38
    },
    {
        "Date": "2022-06-10",
        "actual": 37,
        "yhat_lower": -2,
        "yhat_upper": 79,
        "yhat": 37
    },
    {
        "Date": "2022-06-11",
        "actual": 39,
        "yhat_lower": -33,
        "yhat_upper": 50,
        "yhat": 7
    },
    {
        "Date": "2022-06-12",
        "actual": 21,
        "yhat_lower": -51,
        "yhat_upper": 33,
        "yhat": -7
    },
    {
        "Date": "2022-06-13",
        "actual": 36,
        "yhat_lower": -13,
        "yhat_upper": 65,
        "yhat": 26
    },
    {
        "Date": "2022-06-14",
        "actual": 61,
        "yhat_lower": -14,
        "yhat_upper": 68,
        "yhat": 27
    },
    {
        "Date": "2022-06-15",
        "actual": 37,
        "yhat_lower": -25,
        "yhat_upper": 61,
        "yhat": 20
    },
    {
        "Date": "2022-06-16",
        "actual": 36,
        "yhat_lower": -2,
        "yhat_upper": 78,
        "yhat": 39
    },
    {
        "Date": "2022-06-17",
        "actual": 48,
        "yhat_lower": 0,
        "yhat_upper": 80,
        "yhat": 38
    },
    {
        "Date": "2022-06-18",
        "actual": 46,
        "yhat_lower": -32,
        "yhat_upper": 48,
        "yhat": 8
    },
    {
        "Date": "2022-06-19",
        "actual": 20,
        "yhat_lower": -45,
        "yhat_upper": 35,
        "yhat": -5
    },
    {
        "Date": "2022-06-20",
        "actual": 59,
        "yhat_lower": -13,
        "yhat_upper": 70,
        "yhat": 28
    },
    {
        "Date": "2022-06-21",
        "actual": 52,
        "yhat_lower": -11,
        "yhat_upper": 71,
        "yhat": 29
    },
    {
        "Date": "2022-06-22",
        "actual": 49,
        "yhat_lower": -20,
        "yhat_upper": 63,
        "yhat": 22
    },
    {
        "Date": "2022-06-23",
        "actual": 48,
        "yhat_lower": 3,
        "yhat_upper": 86,
        "yhat": 42
    },
    {
        "Date": "2022-06-24",
        "actual": 52,
        "yhat_lower": 1,
        "yhat_upper": 81,
        "yhat": 41
    },
    {
        "Date": "2022-06-25",
        "actual": 38,
        "yhat_lower": -29,
        "yhat_upper": 54,
        "yhat": 12
    },
    {
        "Date": "2022-06-26",
        "actual": 36,
        "yhat_lower": -42,
        "yhat_upper": 38,
        "yhat": -2
    },
    {
        "Date": "2022-06-27",
        "actual": 50,
        "yhat_lower": -8,
        "yhat_upper": 73,
        "yhat": 32
    },
    {
        "Date": "2022-06-28",
        "actual": 76,
        "yhat_lower": -6,
        "yhat_upper": 75,
        "yhat": 33
    },
    {
        "Date": "2022-06-29",
        "actual": 45,
        "yhat_lower": -17,
        "yhat_upper": 69,
        "yhat": 27
    },
    {
        "Date": "2022-06-30",
        "actual": 59,
        "yhat_lower": 8,
        "yhat_upper": 90,
        "yhat": 46
    },
    {
        "Date": "2022-07-01",
        "actual": 38,
        "yhat_lower": 4,
        "yhat_upper": 85,
        "yhat": 45
    },
    {
        "Date": "2022-07-02",
        "actual": 56,
        "yhat_lower": -24,
        "yhat_upper": 59,
        "yhat": 16
    },
    {
        "Date": "2022-07-03",
        "actual": 31,
        "yhat_lower": -37,
        "yhat_upper": 44,
        "yhat": 2
    },
    {
        "Date": "2022-07-04",
        "actual": 24,
        "yhat_lower": 0,
        "yhat_upper": 76,
        "yhat": 36
    },
    {
        "Date": "2022-07-05",
        "actual": 47,
        "yhat_lower": -4,
        "yhat_upper": 79,
        "yhat": 38
    },
    {
        "Date": "2022-07-06",
        "actual": 45,
        "yhat_lower": -10,
        "yhat_upper": 75,
        "yhat": 31
    },
    {
        "Date": "2022-07-07",
        "actual": 42,
        "yhat_lower": 10,
        "yhat_upper": 93,
        "yhat": 51
    },
    {
        "Date": "2022-07-08",
        "actual": 60,
        "yhat_lower": 10,
        "yhat_upper": 91,
        "yhat": 50
    },
    {
        "Date": "2022-07-09",
        "actual": 39,
        "yhat_lower": -20,
        "yhat_upper": 62,
        "yhat": 21
    },
    {
        "Date": "2022-07-10",
        "actual": 28,
        "yhat_lower": -36,
        "yhat_upper": 44,
        "yhat": 6
    },
    {
        "Date": "2022-07-11",
        "actual": 58,
        "yhat_lower": 3,
        "yhat_upper": 83,
        "yhat": 40
    },
    {
        "Date": "2022-07-12",
        "actual": 60,
        "yhat_lower": 0,
        "yhat_upper": 85,
        "yhat": 41
    },
    {
        "Date": "2022-07-13",
        "actual": 44,
        "yhat_lower": -8,
        "yhat_upper": 76,
        "yhat": 35
    },
    {
        "Date": "2022-07-14",
        "actual": 50,
        "yhat_lower": 13,
        "yhat_upper": 94,
        "yhat": 54
    },
    {
        "Date": "2022-07-15",
        "actual": 55,
        "yhat_lower": 13,
        "yhat_upper": 99,
        "yhat": 53
    },
    {
        "Date": "2022-07-16",
        "actual": 44,
        "yhat_lower": -17,
        "yhat_upper": 65,
        "yhat": 24
    },
    {
        "Date": "2022-07-17",
        "actual": 24,
        "yhat_lower": -30,
        "yhat_upper": 51,
        "yhat": 9
    },
    {
        "Date": "2022-07-18",
        "actual": 39,
        "yhat_lower": -2,
        "yhat_upper": 85,
        "yhat": 43
    },
    {
        "Date": "2022-07-19",
        "actual": 60,
        "yhat_lower": -1,
        "yhat_upper": 84,
        "yhat": 43
    },
    {
        "Date": "2022-07-20",
        "actual": 38,
        "yhat_lower": -2,
        "yhat_upper": 78,
        "yhat": 37
    },
    {
        "Date": "2022-07-21",
        "actual": 49,
        "yhat_lower": 14,
        "yhat_upper": 99,
        "yhat": 56
    },
    {
        "Date": "2022-07-22",
        "actual": 44,
        "yhat_lower": 14,
        "yhat_upper": 97,
        "yhat": 55
    },
    {
        "Date": "2022-07-23",
        "actual": 41,
        "yhat_lower": -16,
        "yhat_upper": 64,
        "yhat": 25
    },
    {
        "Date": "2022-07-24",
        "actual": 27,
        "yhat_lower": -31,
        "yhat_upper": 54,
        "yhat": 11
    },
    {
        "Date": "2022-07-25",
        "actual": 56,
        "yhat_lower": 4,
        "yhat_upper": 87,
        "yhat": 45
    },
    {
        "Date": "2022-07-26",
        "actual": 58,
        "yhat_lower": 6,
        "yhat_upper": 89,
        "yhat": 46
    },
    {
        "Date": "2022-07-27",
        "actual": 37,
        "yhat_lower": -3,
        "yhat_upper": 79,
        "yhat": 39
    },
    {
        "Date": "2022-07-28",
        "actual": 35,
        "yhat_lower": 17,
        "yhat_upper": 101,
        "yhat": 58
    },
    {
        "Date": "2022-07-29",
        "actual": 41,
        "yhat_lower": 19,
        "yhat_upper": 98,
        "yhat": 58
    },
    {
        "Date": "2022-07-30",
        "actual": 32,
        "yhat_lower": -11,
        "yhat_upper": 71,
        "yhat": 29
    },
    {
        "Date": "2022-07-31",
        "actual": 27,
        "yhat_lower": -28,
        "yhat_upper": 52,
        "yhat": 14
    },
    {
        "Date": "2022-08-01",
        "actual": 42,
        "yhat_lower": 7,
        "yhat_upper": 91,
        "yhat": 49
    },
    {
        "Date": "2022-08-02",
        "actual": 58,
        "yhat_lower": 6,
        "yhat_upper": 90,
        "yhat": 50
    },
    {
        "Date": "2022-08-03",
        "actual": 41,
        "yhat_lower": 0,
        "yhat_upper": 87,
        "yhat": 44
    },
    {
        "Date": "2022-08-04",
        "actual": 37,
        "yhat_lower": 20,
        "yhat_upper": 102,
        "yhat": 63
    },
    {
        "Date": "2022-08-05",
        "actual": 37,
        "yhat_lower": 18,
        "yhat_upper": 101,
        "yhat": 63
    },
    {
        "Date": "2022-08-06",
        "actual": 22,
        "yhat_lower": -9,
        "yhat_upper": 74,
        "yhat": 34
    },
    {
        "Date": "2022-08-07",
        "actual": 32,
        "yhat_lower": -22,
        "yhat_upper": 60,
        "yhat": 19
    },
    {
        "Date": "2022-08-08",
        "actual": 27,
        "yhat_lower": 15,
        "yhat_upper": 94,
        "yhat": 54
    },
    {
        "Date": "2022-08-09",
        "actual": 51,
        "yhat_lower": 16,
        "yhat_upper": 95,
        "yhat": 55
    },
    {
        "Date": "2022-08-10",
        "actual": 37,
        "yhat_lower": 8,
        "yhat_upper": 89,
        "yhat": 48
    },
    {
        "Date": "2022-08-11",
        "actual": 31,
        "yhat_lower": 27,
        "yhat_upper": 112,
        "yhat": 68
    },
    {
        "Date": "2022-08-12",
        "actual": 38,
        "yhat_lower": 27,
        "yhat_upper": 107,
        "yhat": 67
    },
    {
        "Date": "2022-08-13",
        "actual": 51,
        "yhat_lower": -4,
        "yhat_upper": 77,
        "yhat": 37
    },
    {
        "Date": "2022-08-14",
        "actual": 24,
        "yhat_lower": -17,
        "yhat_upper": 65,
        "yhat": 22
    },
    {
        "Date": "2022-08-15",
        "actual": 28,
        "yhat_lower": 13,
        "yhat_upper": 101,
        "yhat": 56
    },
    {
        "Date": "2022-08-16",
        "actual": 53,
        "yhat_lower": 15,
        "yhat_upper": 103,
        "yhat": 57
    },
    {
        "Date": "2022-08-17",
        "actual": 31,
        "yhat_lower": 8,
        "yhat_upper": 94,
        "yhat": 50
    },
    {
        "Date": "2022-08-18",
        "actual": 34,
        "yhat_lower": 29,
        "yhat_upper": 112,
        "yhat": 68
    },
    {
        "Date": "2022-08-19",
        "actual": 38,
        "yhat_lower": 26,
        "yhat_upper": 109,
        "yhat": 67
    },
    {
        "Date": "2022-08-20",
        "actual": 26,
        "yhat_lower": -3,
        "yhat_upper": 81,
        "yhat": 36
    },
    {
        "Date": "2022-08-21",
        "actual": 31,
        "yhat_lower": -18,
        "yhat_upper": 63,
        "yhat": 21
    },
    {
        "Date": "2022-08-22",
        "actual": 39,
        "yhat_lower": 11,
        "yhat_upper": 97,
        "yhat": 54
    },
    {
        "Date": "2022-08-23",
        "actual": 45,
        "yhat_lower": 9,
        "yhat_upper": 94,
        "yhat": 53
    },
    {
        "Date": "2022-08-24",
        "actual": 37,
        "yhat_lower": 3,
        "yhat_upper": 87,
        "yhat": 46
    },
    {
        "Date": "2022-08-25",
        "actual": 45,
        "yhat_lower": 21,
        "yhat_upper": 106,
        "yhat": 63
    },
    {
        "Date": "2022-08-26",
        "actual": 45,
        "yhat_lower": 20,
        "yhat_upper": 102,
        "yhat": 61
    },
    {
        "Date": "2022-08-27",
        "actual": 36,
        "yhat_lower": -13,
        "yhat_upper": 71,
        "yhat": 30
    },
    {
        "Date": "2022-08-28",
        "actual": 25,
        "yhat_lower": -29,
        "yhat_upper": 58,
        "yhat": 14
    },
    {
        "Date": "2022-08-29",
        "actual": 44,
        "yhat_lower": 6,
        "yhat_upper": 90,
        "yhat": 47
    },
    {
        "Date": "2022-08-30",
        "actual": 36,
        "yhat_lower": 2,
        "yhat_upper": 88,
        "yhat": 47
    },
    {
        "Date": "2022-08-31",
        "actual": 34,
        "yhat_lower": -2,
        "yhat_upper": 80,
        "yhat": 39
    },
    {
        "Date": "2022-09-01",
        "actual": 33,
        "yhat_lower": 16,
        "yhat_upper": 105,
        "yhat": 57
    },
    {
        "Date": "2022-09-02",
        "actual": 37,
        "yhat_lower": 13,
        "yhat_upper": 94,
        "yhat": 55
    },
    {
        "Date": "2022-09-03",
        "actual": 43,
        "yhat_lower": -19,
        "yhat_upper": 65,
        "yhat": 24
    },
    {
        "Date": "2022-09-04",
        "actual": 15,
        "yhat_lower": -32,
        "yhat_upper": 49,
        "yhat": 9
    },
    {
        "Date": "2022-09-05",
        "actual": 17,
        "yhat_lower": 2,
        "yhat_upper": 85,
        "yhat": 42
    },
    {
        "Date": "2022-09-06",
        "actual": 52,
        "yhat_lower": 1,
        "yhat_upper": 84,
        "yhat": 42
    },
    {
        "Date": "2022-09-07",
        "actual": 27,
        "yhat_lower": -9,
        "yhat_upper": 80,
        "yhat": 35
    },
    {
        "Date": "2022-09-08",
        "actual": 27,
        "yhat_lower": 16,
        "yhat_upper": 97,
        "yhat": 54
    },
    {
        "Date": "2022-09-09",
        "actual": 37,
        "yhat_lower": 8,
        "yhat_upper": 98,
        "yhat": 53
    },
    {
        "Date": "2022-09-10",
        "actual": 42,
        "yhat_lower": -19,
        "yhat_upper": 67,
        "yhat": 23
    },
    {
        "Date": "2022-09-11",
        "actual": 20,
        "yhat_lower": -32,
        "yhat_upper": 49,
        "yhat": 8
    },
    {
        "Date": "2022-09-12",
        "actual": 31,
        "yhat_lower": -2,
        "yhat_upper": 86,
        "yhat": 43
    },
    {
        "Date": "2022-09-13",
        "actual": 51,
        "yhat_lower": 2,
        "yhat_upper": 89,
        "yhat": 44
    },
    {
        "Date": "2022-09-14",
        "actual": 28,
        "yhat_lower": -4,
        "yhat_upper": 78,
        "yhat": 38
    },
    {
        "Date": "2022-09-15",
        "actual": 29,
        "yhat_lower": 14,
        "yhat_upper": 99,
        "yhat": 57
    },
    {
        "Date": "2022-09-16",
        "actual": 40,
        "yhat_lower": 15,
        "yhat_upper": 98,
        "yhat": 56
    },
    {
        "Date": "2022-09-17",
        "actual": 42,
        "yhat_lower": -14,
        "yhat_upper": 70,
        "yhat": 28
    },
    {
        "Date": "2022-09-18",
        "actual": 24,
        "yhat_lower": -26,
        "yhat_upper": 56,
        "yhat": 13
    },
    {
        "Date": "2022-09-19",
        "actual": 51,
        "yhat_lower": 7,
        "yhat_upper": 94,
        "yhat": 48
    },
    {
        "Date": "2022-09-20",
        "actual": 38,
        "yhat_lower": 7,
        "yhat_upper": 89,
        "yhat": 49
    },
    {
        "Date": "2022-09-21",
        "actual": 41,
        "yhat_lower": 3,
        "yhat_upper": 89,
        "yhat": 43
    },
    {
        "Date": "2022-09-22",
        "actual": 27,
        "yhat_lower": 20,
        "yhat_upper": 102,
        "yhat": 62
    },
    {
        "Date": "2022-09-23",
        "actual": 38,
        "yhat_lower": 18,
        "yhat_upper": 103,
        "yhat": 61
    },
    {
        "Date": "2022-09-24",
        "actual": 39,
        "yhat_lower": -8,
        "yhat_upper": 71,
        "yhat": 32
    },
    {
        "Date": "2022-09-25",
        "actual": 22,
        "yhat_lower": -25,
        "yhat_upper": 59,
        "yhat": 17
    },
    {
        "Date": "2022-09-26",
        "actual": 48,
        "yhat_lower": 11,
        "yhat_upper": 92,
        "yhat": 51
    },
    {
        "Date": "2022-09-27",
        "actual": 60,
        "yhat_lower": 9,
        "yhat_upper": 93,
        "yhat": 52
    },
    {
        "Date": "2022-09-28",
        "actual": 37,
        "yhat_lower": 4,
        "yhat_upper": 87,
        "yhat": 45
    },
    {
        "Date": "2022-09-29",
        "actual": 29,
        "yhat_lower": 20,
        "yhat_upper": 104,
        "yhat": 63
    },
    {
        "Date": "2022-09-30",
        "actual": 26,
        "yhat_lower": 22,
        "yhat_upper": 102,
        "yhat": 62
    },
    {
        "Date": "2022-10-01",
        "actual": 38,
        "yhat_lower": -8,
        "yhat_upper": 74,
        "yhat": 31
    },
    {
        "Date": "2022-10-02",
        "actual": 26,
        "yhat_lower": -27,
        "yhat_upper": 57,
        "yhat": 16
    },
    {
        "Date": "2022-10-03",
        "actual": 33,
        "yhat_lower": 6,
        "yhat_upper": 84,
        "yhat": 49
    },
    {
        "Date": "2022-10-04",
        "actual": 57,
        "yhat_lower": 8,
        "yhat_upper": 92,
        "yhat": 48
    },
    {
        "Date": "2022-10-05",
        "actual": 34,
        "yhat_lower": -4,
        "yhat_upper": 83,
        "yhat": 40
    },
    {
        "Date": "2022-10-06",
        "actual": 19,
        "yhat_lower": 19,
        "yhat_upper": 102,
        "yhat": 58
    },
    {
        "Date": "2022-10-07",
        "actual": 32,
        "yhat_lower": 12,
        "yhat_upper": 96,
        "yhat": 56
    },
    {
        "Date": "2022-10-08",
        "actual": 40,
        "yhat_lower": -18,
        "yhat_upper": 67,
        "yhat": 25
    },
    {
        "Date": "2022-10-09",
        "actual": 21,
        "yhat_lower": -31,
        "yhat_upper": 47,
        "yhat": 8
    },
    {
        "Date": "2022-10-10",
        "actual": 40,
        "yhat_lower": -1,
        "yhat_upper": 84,
        "yhat": 41
    },
    {
        "Date": "2022-10-11",
        "actual": 50,
        "yhat_lower": -1,
        "yhat_upper": 82,
        "yhat": 40
    },
    {
        "Date": "2022-10-12",
        "actual": 35,
        "yhat_lower": -6,
        "yhat_upper": 75,
        "yhat": 32
    },
    {
        "Date": "2022-10-13",
        "actual": 27,
        "yhat_lower": 9,
        "yhat_upper": 95,
        "yhat": 50
    },
    {
        "Date": "2022-10-14",
        "actual": 32,
        "yhat_lower": 7,
        "yhat_upper": 87,
        "yhat": 47
    },
    {
        "Date": "2022-10-15",
        "actual": 38,
        "yhat_lower": -24,
        "yhat_upper": 61,
        "yhat": 16
    },
    {
        "Date": "2022-10-16",
        "actual": 21,
        "yhat_lower": -41,
        "yhat_upper": 44,
        "yhat": 0
    },
    {
        "Date": "2022-10-17",
        "actual": 44,
        "yhat_lower": -8,
        "yhat_upper": 76,
        "yhat": 33
    },
    {
        "Date": "2022-10-18",
        "actual": 50,
        "yhat_lower": -8,
        "yhat_upper": 75,
        "yhat": 33
    },
    {
        "Date": "2022-10-19",
        "actual": 27,
        "yhat_lower": -17,
        "yhat_upper": 66,
        "yhat": 25
    },
    {
        "Date": "2022-10-20",
        "actual": 26,
        "yhat_lower": 2,
        "yhat_upper": 81,
        "yhat": 43
    },
    {
        "Date": "2022-10-21",
        "actual": 38,
        "yhat_lower": 2,
        "yhat_upper": 82,
        "yhat": 42
    },
    {
        "Date": "2022-10-22",
        "actual": 52,
        "yhat_lower": -29,
        "yhat_upper": 58,
        "yhat": 12
    },
    {
        "Date": "2022-10-23",
        "actual": 15,
        "yhat_lower": -48,
        "yhat_upper": 38,
        "yhat": -3
    },
    {
        "Date": "2022-10-24",
        "actual": 35,
        "yhat_lower": -8,
        "yhat_upper": 72,
        "yhat": 30
    },
    {
        "Date": "2022-10-25",
        "actual": 35,
        "yhat_lower": -9,
        "yhat_upper": 71,
        "yhat": 31
    },
    {
        "Date": "2022-10-26",
        "actual": 40,
        "yhat_lower": -17,
        "yhat_upper": 66,
        "yhat": 24
    },
    {
        "Date": "2022-10-27",
        "actual": 29,
        "yhat_lower": 2,
        "yhat_upper": 87,
        "yhat": 43
    },
    {
        "Date": "2022-10-28",
        "actual": 27,
        "yhat_lower": 2,
        "yhat_upper": 86,
        "yhat": 42
    },
    {
        "Date": "2022-10-29",
        "actual": 60,
        "yhat_lower": -31,
        "yhat_upper": 57,
        "yhat": 13
    },
    {
        "Date": "2022-10-30",
        "actual": 27,
        "yhat_lower": -39,
        "yhat_upper": 42,
        "yhat": 0
    },
    {
        "Date": "2022-10-31",
        "actual": 42,
        "yhat_lower": -10,
        "yhat_upper": 75,
        "yhat": 34
    },
    {
        "Date": "2022-11-01",
        "actual": 57,
        "yhat_lower": -7,
        "yhat_upper": 81,
        "yhat": 35
    },
    {
        "Date": "2022-11-02",
        "actual": 41,
        "yhat_lower": -14,
        "yhat_upper": 72,
        "yhat": 29
    },
    {
        "Date": "2022-11-03",
        "actual": 34,
        "yhat_lower": 9,
        "yhat_upper": 94,
        "yhat": 49
    },
    {
        "Date": "2022-11-04",
        "actual": 39,
        "yhat_lower": 5,
        "yhat_upper": 90,
        "yhat": 49
    },
    {
        "Date": "2022-11-05",
        "actual": 48,
        "yhat_lower": -20,
        "yhat_upper": 62,
        "yhat": 21
    },
    {
        "Date": "2022-11-06",
        "actual": 34,
        "yhat_lower": -35,
        "yhat_upper": 52,
        "yhat": 7
    },
    {
        "Date": "2022-11-07",
        "actual": 47,
        "yhat_lower": 3,
        "yhat_upper": 85,
        "yhat": 43
    },
    {
        "Date": "2022-11-08",
        "actual": 41,
        "yhat_lower": 4,
        "yhat_upper": 88,
        "yhat": 45
    },
    {
        "Date": "2022-11-09",
        "actual": 36,
        "yhat_lower": -2,
        "yhat_upper": 83,
        "yhat": 40
    },
    {
        "Date": "2022-11-10",
        "actual": 42,
        "yhat_lower": 15,
        "yhat_upper": 101,
        "yhat": 60
    },
    {
        "Date": "2022-11-11",
        "actual": null,
        "yhat_lower": 20,
        "yhat_upper": 104,
        "yhat": 61
    },
    {
        "Date": "2022-11-12",
        "actual": null,
        "yhat_lower": -11,
        "yhat_upper": 74,
        "yhat": 33
    },
    {
        "Date": "2022-11-13",
        "actual": null,
        "yhat_lower": -21,
        "yhat_upper": 63,
        "yhat": 20
    },
    {
        "Date": "2022-11-14",
        "actual": null,
        "yhat_lower": 15,
        "yhat_upper": 99,
        "yhat": 55
    },
    {
        "Date": "2022-11-15",
        "actual": null,
        "yhat_lower": 17,
        "yhat_upper": 99,
        "yhat": 58
    },
    {
        "Date": "2022-11-16",
        "actual": null,
        "yhat_lower": 13,
        "yhat_upper": 98,
        "yhat": 53
    },
    {
        "Date": "2022-11-17",
        "actual": null,
        "yhat_lower": 33,
        "yhat_upper": 114,
        "yhat": 74
    },
    {
        "Date": "2022-11-18",
        "actual": null,
        "yhat_lower": 31,
        "yhat_upper": 115,
        "yhat": 75
    },
    {
        "Date": "2022-11-19",
        "actual": null,
        "yhat_lower": 3,
        "yhat_upper": 90,
        "yhat": 48
    },
    {
        "Date": "2022-11-20",
        "actual": null,
        "yhat_lower": -4,
        "yhat_upper": 73,
        "yhat": 35
    },
    {
        "Date": "2022-11-21",
        "actual": null,
        "yhat_lower": 29,
        "yhat_upper": 115,
        "yhat": 71
    },
    {
        "Date": "2022-11-22",
        "actual": null,
        "yhat_lower": 35,
        "yhat_upper": 115,
        "yhat": 74
    },
    {
        "Date": "2022-11-23",
        "actual": null,
        "yhat_lower": 24,
        "yhat_upper": 113,
        "yhat": 70
    },
    {
        "Date": "2022-11-24",
        "actual": null,
        "yhat_lower": 50,
        "yhat_upper": 134,
        "yhat": 91
    },
    {
        "Date": "2022-11-25",
        "actual": null,
        "yhat_lower": 50,
        "yhat_upper": 134,
        "yhat": 92
    },
    {
        "Date": "2022-11-26",
        "actual": null,
        "yhat_lower": 25,
        "yhat_upper": 107,
        "yhat": 65
    },
    {
        "Date": "2022-11-27",
        "actual": null,
        "yhat_lower": 12,
        "yhat_upper": 92,
        "yhat": 52
    },
    {
        "Date": "2022-11-28",
        "actual": null,
        "yhat_lower": 47,
        "yhat_upper": 130,
        "yhat": 88
    },
    {
        "Date": "2022-11-29",
        "actual": null,
        "yhat_lower": 48,
        "yhat_upper": 128,
        "yhat": 91
    },
    {
        "Date": "2022-11-30",
        "actual": null,
        "yhat_lower": 43,
        "yhat_upper": 128,
        "yhat": 87
    },
    {
        "Date": "2022-12-01",
        "actual": null,
        "yhat_lower": 67,
        "yhat_upper": 153,
        "yhat": 108
    },
    {
        "Date": "2022-12-02",
        "actual": null,
        "yhat_lower": 68,
        "yhat_upper": 153,
        "yhat": 110
    },
    {
        "Date": "2022-12-03",
        "actual": null,
        "yhat_lower": 41,
        "yhat_upper": 123,
        "yhat": 82
    },
    {
        "Date": "2022-12-04",
        "actual": null,
        "yhat_lower": 28,
        "yhat_upper": 109,
        "yhat": 70
    },
    {
        "Date": "2022-12-05",
        "actual": null,
        "yhat_lower": 63,
        "yhat_upper": 149,
        "yhat": 106
    },
    {
        "Date": "2022-12-06",
        "actual": null,
        "yhat_lower": 65,
        "yhat_upper": 151,
        "yhat": 109
    },
    {
        "Date": "2022-12-07",
        "actual": null,
        "yhat_lower": 62,
        "yhat_upper": 150,
        "yhat": 105
    },
    {
        "Date": "2022-12-08",
        "actual": null,
        "yhat_lower": 84,
        "yhat_upper": 169,
        "yhat": 126
    },
    {
        "Date": "2022-12-09",
        "actual": null,
        "yhat_lower": 81,
        "yhat_upper": 169,
        "yhat": 127
    },
    {
        "Date": "2022-12-10",
        "actual": null,
        "yhat_lower": 58,
        "yhat_upper": 143,
        "yhat": 100
    }
];

// let jsonData = astoriaData.reverse();
let jsonData = astoriaData;


console.log('1. data in json format : ', jsonData);
console.log('2. total items : ', jsonData.length);
let arrayNeeded = [['ds', 'Original Value', 'yhat', 'yhat_upper', 'yhat_lower']];

// Original Value : actual

// from index 860




for (let i = 810; i < jsonData.length; i++) {
    // for (let i = jsonData.length-1 ; i>819;i--) {
    console.log(`->index: ${i}\n`);
    console.log(jsonData[i]['Date'], '-------------------', typeof (jsonData[i]['Date']), jsonData[i]);
    // console.log("added original data for date : ",(1961+i),'\n access index:',index);
    // arrayNeeded.push([1961+i,dataset[index]['Per_Capita_in_USD'],data[i]['yhat'],data[i]['yhat_lower'],data[i]['yhat_upper']]);
    let currDate = new Date(jsonData[i]['Date']);
    console.log('date : ', currDate, '...', jsonData[i]['actual'], jsonData[i]['yhat'], jsonData[i]['yhat_upper'], jsonData[i]['yhat_lower']);
    arrayNeeded.push([currDate, jsonData[i]['actual'], jsonData[i]['yhat'], jsonData[i]['yhat_upper'], jsonData[i]['yhat_lower']]);
    console.log('-------');
}

// rendering using google charts //


console.log('only upto 862 index for now');
console.log("lenth of array needed : ", arrayNeeded.length);
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
console.log("array needed : ", arrayNeeded);
console.log("\n------------ rendering charts -----------------");
function drawChart() {
    var data = google.visualization.arrayToDataTable(arrayNeeded);

    // add new columns -- for tooltip 

    var options = {
        seriesType: 'bars',
        title: 'Astoria Encounters Trend Line',
        vAxis: {
            title: 'Encounters', viewWindow: {
                max: 120,
                min: 0
            }
        },
        // hAxis: {
        //     title: "Dates", direction: -1, slantedText: true, slantedTextAngle: 90,
        //     format: 'M/d/yy',gridlines: { count: 15 }
        // },
        hAxis: {
            title: "Dates", slantedText: true, slantedTextAngle: 90,
            gridlines: {
                units: {
                    days: { format: 'MMM YYY dd HH MM SS' },
                }
            }
        },
        explorer: {
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomOut: 2,
            maxZoomIn: 4.0
        },
        colors: ['#15A0C8' , '#ECA403', '#63A74A' , '#981B48'],
        theme: 'material',
        series: {
            1: { type: 'line', lineWidth: 1, pointSize: 1 },
            2: { type: 'line', lineWidth: 2, pointSize: 2 },
            3: { type: 'line', lineWidth: 1, pointSize: 1 },
        }


    };
    // original 
    // var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}




