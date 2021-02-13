// TODO: use S&P Composite Index from 1872 to 1957, 
// and then the S&P 500 Index from 1957 to 1970,
// and then Wilshire 5000 after that https://www.bogleheads.org/wiki/US_total_market_index_returns
// http://www.econ.yale.edu/~shiller/data.htm
// https://advisor.visualcapitalist.com/historical-stock-market-returns/

// CPI is January of the given year - https://www.bls.gov/regions/mid-atlantic/data/consumerpriceindexhistorical_us_table.htm
// cape is cape ratio in January - https://www.multpl.com/shiller-pe/table/by-month

var Market = {
    "1870": {
        "cpi": 12.46,
        "fixed_income": 0.0532,
        "gold": 0.02656043,
        "equities": 0.15315315000000002,
        "inflation": 0.015248796147672605
    },
    "1871": {
        "cpi": 12.46,
        "fixed_income": 0.0532,
        "gold": 0.02656043,
        "equities": 0.15315315000000002,
        "inflation": 0.015248796147672605
    },
    "1872": {
        "cpi": 12.65,
        "fixed_income": 0.0536,
        "gold": -0.01940492,
        "equities": 0.10561728000000001,
        "inflation": 0.02292490118577062
    },
    "1873": {
        "cpi": 12.94,
        "fixed_income": 0.0558,
        "gold": 0.01539138,
        "equities": -0.028864969999999997,
        "inflation": -0.044049459041731076
    },
    "1874": {
        "cpi": 12.37,
        "fixed_income": 0.0547,
        "gold": 0.01948896,
        "equities": 0.04506438,
        "inflation": -0.06952303961196438
    },
    "1875": {
        "cpi": 11.51,
        "fixed_income": 0.0507,
        "gold": -0.0526763,
        "equities": 0.05451541,
        "inflation": -0.05734144222415294
    },
    "1876": {
        "cpi": 10.85,
        "fixed_income": 0.0459,
        "gold": -0.0470852,
        "equities": -0.1367713,
        "inflation": 0.008294930875575979
    },
    "1877": {
        "cpi": 10.94,
        "fixed_income": 0.0445,
        "gold": -0.02635294,
        "equities": -0.002591550000000012,
        "inflation": -0.15630712979890304
    },
    "1878": {
        "cpi": 9.23,
        "fixed_income": 0.0434,
        "gold": -0.00096665,
        "equities": 0.15975383999999998,
        "inflation": -0.10292524377031431
    },
    "1879": {
        "cpi": 8.28,
        "fixed_income": 0.0422,
        "gold": 0,
        "equities": 0.47812848999999996,
        "inflation": 0.2065217391304348
    },
    "1880": {
        "cpi": 9.99,
        "fixed_income": 0.0402,
        "gold": 0,
        "equities": 0.25146771,
        "inflation": -0.0570570570570571
    },
    "1881": {
        "cpi": 9.42,
        "fixed_income": 0.037,
        "gold": 0,
        "cape": 18.45,
        "equities": -0.0008077500000000029,
        "inflation": 0.08067940552016983
    },
    "1882": {
        "cpi": 10.18,
        "fixed_income": 0.0362,
        "gold": 0,
        "cape": 15.66,
        "equities": 0.03547297,
        "inflation": -0.018664047151277008
    },
    "1883": {
        "cpi": 9.99,
        "fixed_income": 0.0363,
        "gold": 0,
        "cape": 15.25,
        "equities": -0.05321858000000001,
        "inflation": -0.07607607607607603
    },
    "1884": {
        "cpi": 9.23,
        "fixed_income": 0.0362,
        "gold": 0,
        "cape": 14.41,
        "equities": -0.11808880000000001,
        "inflation": -0.10292524377031431
    },
    "1885": {
        "cpi": 8.28,
        "fixed_income": 0.0352,
        "gold": 0,
        "cape": 13.1,
        "equities": 0.29816037,
        "inflation": -0.035024154589371914
    },
    "1886": {
        "cpi": 7.99,
        "fixed_income": 0.0337,
        "gold": 0,
        "cape": 16.67,
        "equities": 0.11890384000000001,
        "inflation": 0
    },
    "1887": {
        "cpi": 7.99,
        "fixed_income": 0.0352,
        "gold": 0,
        "cape": 17.48,
        "equities": -0.00851255,
        "inflation": 0.04755944931163936
    },
    "1888": {
        "cpi": 8.37,
        "fixed_income": 0.0367,
        "gold": 0,
        "cape": 15.33,
        "equities": 0.03357816,
        "inflation": -0.04540023894862588
    },
    "1889": {
        "cpi": 7.99,
        "fixed_income": 0.0345,
        "gold": 0,
        "cape": 15.77,
        "equities": 0.07045802000000001,
        "inflation": -0.04755944931163958
    },
    "1890": {
        "cpi": 7.61,
        "fixed_income": 0.0342,
        "gold": 0,
        "cape": 17.18,
        "equities": -0.059479559999999994,
        "inflation": 0.024967148488830526
    },
    "1891": {
        "cpi": 7.8,
        "fixed_income": 0.0362,
        "gold": 0,
        "cape": 15.4,
        "equities": 0.1838843,
        "inflation": -0.060256410256410264
    },
    "1892": {
        "cpi": 7.33,
        "fixed_income": 0.036,
        "gold": 0,
        "cape": 18.96,
        "equities": 0.05838475,
        "inflation": 0.07776261937244211
    },
    "1893": {
        "cpi": 7.9,
        "fixed_income": 0.0375,
        "gold": 0,
        "cape": 17.6,
        "equities": -0.18702317,
        "inflation": -0.13291139240506333
    },
    "1894": {
        "cpi": 6.85,
        "fixed_income": 0.037,
        "gold": 0,
        "cape": 15.7,
        "equities": 0.04090278,
        "inflation": -0.040875912408758985
    },
    "1895": {
        "cpi": 6.57,
        "fixed_income": 0.0346,
        "gold": 0,
        "cape": 16.47,
        "equities": 0.053717640000000004,
        "inflation": 0.013698630136986356
    },
    "1896": {
        "cpi": 6.66,
        "fixed_income": 0.036,
        "gold": 0,
        "cape": 16.53,
        "equities": 0.03259953,
        "inflation": -0.028528528528528607
    },
    "1897": {
        "cpi": 6.47,
        "fixed_income": 0.034,
        "gold": 0,
        "cape": 16.99,
        "equities": 0.19905213000000002,
        "inflation": 0.029366306027820865
    },
    "1898": {
        "cpi": 6.66,
        "fixed_income": 0.0335,
        "gold": 0,
        "cape": 19.21,
        "equities": 0.28313525,
        "inflation": 0.01501501501501501
    },
    "1899": {
        "cpi": 6.76,
        "fixed_income": 0.031,
        "gold": 0,
        "cape": 22.87,
        "equities": 0.03631579,
        "inflation": 0.16863905325443795
    },
    "1900": {
        "cpi": 7.9,
        "fixed_income": 0.0315,
        "gold": 0,
        "cape": 18.63,
        "equities": 0.19467213,
        "inflation": -0.024050632911392422
    },
    "1901": {
        "cpi": 7.71,
        "fixed_income": 0.031,
        "gold": 0,
        "cape": 20.94,
        "equities": 0.19118812000000002,
        "inflation": 0.024643320363164856
    },
    "1902": {
        "cpi": 7.9,
        "fixed_income": 0.0318,
        "gold": 0,
        "cape": 22.3,
        "equities": 0.08137931000000001,
        "inflation": 0.09620253164556969
    },
    "1903": {
        "cpi": 8.66,
        "fixed_income": 0.033,
        "gold": 0,
        "cape": 20.29,
        "equities": -0.17119385,
        "inflation": -0.04387990762124716
    },
    "1904": {
        "cpi": 8.28,
        "fixed_income": 0.034,
        "gold": 0,
        "cape": 15.84,
        "equities": 0.31387725,
        "inflation": 0.022946859903381744
    },
    "1905": {
        "cpi": 8.47,
        "fixed_income": 0.0348,
        "gold": 0,
        "cape": 18.44,
        "equities": 0.20779360000000002,
        "inflation": 0
    },
    "1906": {
        "cpi": 8.47,
        "fixed_income": 0.0343,
        "gold": 0,
        "cape": 20.1,
        "equities": 0.002613979999999995,
        "inflation": 0.044864226682408415
    },
    "1907": {
        "cpi": 8.85,
        "fixed_income": 0.0367,
        "gold": 0,
        "cape": 17.19,
        "equities": -0.24128661,
        "inflation": -0.021468926553672274
    },
    "1908": {
        "cpi": 8.66,
        "fixed_income": 0.0387,
        "gold": 0,
        "cape": 11.89,
        "equities": 0.38637956,
        "inflation": 0.0323325635103926
    },
    "1909": {
        "cpi": 8.94,
        "fixed_income": 0.0376,
        "gold": 0,
        "cape": 14.75,
        "equities": 0.15709713,
        "inflation": 0.10738255033557054
    },
    "1910": {
        "cpi": 9.9,
        "fixed_income": 0.0391,
        "gold": 0,
        "cape": 14.52,
        "equities": -0.03645832999999999,
        "inflation": -0.06767676767676767
    },
    "1911": {
        "cpi": 9.23,
        "fixed_income": 0.0398,
        "gold": 0,
        "cape": 14.02,
        "equities": 0.03451996,
        "inflation": -0.010834236186348822
    },
    "1912": {
        "cpi": 9.13,
        "fixed_income": 0.0401,
        "gold": 0,
        "cape": 13.78,
        "equities": 0.07135965,
        "inflation": 0.07338444687842283
    },
    "1913": {
        "cpi": 9.8,
        "fixed_income": 0.0445,
        "gold": 0,
        "cape": 13.13,
        "equities": -0.0483871,
        "inflation": 0.020408163265306145
    },
    "1914": {
        "cpi": 10,
        "fixed_income": 0.0416,
        "gold": 0,
        "cape": 11.62,
        "equities": -0.04958184000000001,
        "inflation": 0.010000000000000009
    },
    "1915": {
        "cpi": 10.1,
        "fixed_income": 0.0424,
        "gold": 0,
        "cape": 10.34,
        "equities": 0.30358288,
        "inflation": 0.02970297029702973
    },
    "1916": {
        "cpi": 10.4,
        "fixed_income": 0.0405,
        "gold": 0,
        "cape": 12.53,
        "equities": 0.07296891,
        "inflation": 0.125
    },
    "1917": {
        "cpi": 11.7,
        "fixed_income": 0.0423,
        "gold": 0,
        "cape": 10.98,
        "equities": -0.18695925000000002,
        "inflation": 0.19658119658119655
    },
    "1918": {
        "cpi": 14,
        "fixed_income": 0.0457,
        "gold": 0,
        "cape": 6.63,
        "equities": 0.18307905,
        "inflation": 0.1785714285714286
    },
    "1919": {
        "cpi": 16.5,
        "fixed_income": 0.045,
        "gold": 0,
        "cape": 6.09,
        "equities": 0.19703184,
        "inflation": 0.16969696969696968
    },
    "1920": {
        "cpi": 19.3,
        "fixed_income": 0.0497,
        "gold": 0,
        "cape": 5.99,
        "equities": -0.13496037,
        "inflation": -0.015544041450777257
    },
    "1921": {
        "cpi": 19,
        "fixed_income": 0.0509,
        "gold": 0,
        "cape": 5.12,
        "equities": 0.09786217,
        "inflation": -0.1105263157894738
    },
    "1922": {
        "cpi": 16.9,
        "fixed_income": 0.043,
        "gold": 0,
        "cape": 6.28,
        "equities": 0.28276712,
        "inflation": -0.005917159763313529
    },
    "1923": {
        "cpi": 16.8,
        "fixed_income": 0.0436,
        "gold": 0,
        "cape": 8.15,
        "equities": 0.04962921,
        "inflation": 0.029761904761904656
    },
    "1924": {
        "cpi": 17.3,
        "fixed_income": 0.0406,
        "gold": 0,
        "cape": 8.07,
        "equities": 0.25840318,
        "inflation": 0
    },
    "1925": {
        "cpi": 17.3,
        "fixed_income": 0.0386,
        "gold": 0,
        "cape": 9.69,
        "equities": 0.24803402,
        "inflation": 0.03468208092485536
    },
    "1926": {
        "cpi": 17.9,
        "fixed_income": 0.0368,
        "gold": 0,
        "cape": 11.33,
        "equities": 0.10731225999999999,
        "inflation": -0.022346368715083775
    },
    "1927": {
        "cpi": 17.5,
        "fixed_income": 0.0334,
        "gold": 0,
        "cape": 13.18,
        "equities": 0.36020149999999995,
        "inflation": -0.011428571428571344
    },
    "1928": {
        "cpi": 17.3,
        "fixed_income": 0.0333,
        "gold": 0,
        "cape": 18.79,
        "equities": 0.46244723,
        "inflation": -0.011560693641618491
    },
    "1929": {
        "cpi": 17.1,
        "fixed_income": 0.036,
        "gold": 0,
        "cape": 27.06,
        "equities": -0.09211585,
        "inflation": 0
    },
    "1930": {
        "cpi": 17.1,
        "fixed_income": 0.0329,
        "gold": 0,
        "cape": 22.3,
        "equities": -0.21921695000000002,
        "inflation": -0.07017543859649134
    },
    "1931": {
        "cpi": 15.9,
        "fixed_income": 0.0334,
        "gold": 0,
        "cape": 16.7,
        "equities": -0.42010638,
        "inflation": -0.10062893081761004
    },
    "1932": {
        "cpi": 14.3,
        "fixed_income": 0.0368,
        "gold": 0.56361877,
        "cape": 9.31,
        "equities": -0.05020482000000001,
        "inflation": -0.09790209790209792
    },
    "1933": {
        "cpi": 12.9,
        "fixed_income": 0.0331,
        "gold": 0.08292079,
        "cape": 8.73,
        "equities": 0.55641749,
        "inflation": 0.02325581395348819
    },
    "1934": {
        "cpi": 13.2,
        "fixed_income": 0.0312,
        "gold": 0,
        "cape": 13.02,
        "equities": -0.0796205,
        "inflation": 0.030303030303030276
    },
    "1935": {
        "cpi": 13.6,
        "fixed_income": 0.0279,
        "gold": 0,
        "cape": 11.49,
        "equities": 0.53455723,
        "inflation": 0.014705882352941346
    },
    "1936": {
        "cpi": 13.8,
        "fixed_income": 0.0265,
        "gold": 0,
        "cape": 17.08,
        "equities": 0.31322674,
        "inflation": 0.021739130434782483
    },
    "1937": {
        "cpi": 14.1,
        "fixed_income": 0.0268,
        "gold": 0,
        "cape": 21.61,
        "equities": -0.31552018000000004,
        "inflation": 0.007092198581560183
    },
    "1938": {
        "cpi": 14.2,
        "fixed_income": 0.0256,
        "gold": 0,
        "cape": 13.51,
        "equities": 0.17536100999999998,
        "inflation": -0.014084507042253502
    },
    "1939": {
        "cpi": 14,
        "fixed_income": 0.0236,
        "gold": -0.01428571,
        "cape": 15.6,
        "equities": 0.02506664,
        "inflation": -0.0071428571428571175
    },
    "1940": {
        "cpi": 13.9,
        "fixed_income": 0.0221,
        "gold": 0.02898551,
        "cape": 16.37,
        "equities": -0.09159893999999999,
        "inflation": 0.014388489208633004
    },
    "1941": {
        "cpi": 14.1,
        "fixed_income": 0.0195,
        "gold": 0,
        "cape": 13.9,
        "equities": -0.08973147000000001,
        "inflation": 0.11347517730496448
    },
    "1942": {
        "cpi": 15.7,
        "fixed_income": 0.0246,
        "gold": 0.02816901,
        "cape": 10.1,
        "equities": 0.20865991,
        "inflation": 0.07643312101910826
    },
    "1943": {
        "cpi": 16.9,
        "fixed_income": 0.0247,
        "gold": -0.00684932,
        "cape": 10.15,
        "equities": 0.23290386999999999,
        "inflation": 0.029585798816567976
    },
    "1944": {
        "cpi": 17.4,
        "fixed_income": 0.0248,
        "gold": 0.02758621,
        "cape": 11.05,
        "equities": 0.19015468,
        "inflation": 0.02298850574712663
    },
    "1945": {
        "cpi": 17.8,
        "fixed_income": 0.0237,
        "gold": 0.02684564,
        "cape": 11.96,
        "equities": 0.38349392,
        "inflation": 0.022471910112359383
    },
    "1946": {
        "cpi": 18.2,
        "fixed_income": 0.0219,
        "gold": 0.12418301,
        "cape": 15.62,
        "equities": -0.11894189999999999,
        "inflation": 0.18131868131868134
    },
    "1947": {
        "cpi": 21.5,
        "fixed_income": 0.0225,
        "gold": -0.02325581,
        "cape": 11.47,
        "equities": 0.021915390000000003,
        "inflation": 0.10232558139534875
    },
    "1948": {
        "cpi": 23.7,
        "fixed_income": 0.0244,
        "gold": -0.03571429,
        "cape": 10.42,
        "equities": 0.09260505999999999,
        "inflation": 0.012658227848101333
    },
    "1949": {
        "cpi": 24,
        "fixed_income": 0.0231,
        "gold": -0.00617284,
        "cape": 10.25,
        "equities": 0.1605903,
        "inflation": -0.02083333333333337
    },
    "1950": {
        "cpi": 23.5,
        "fixed_income": 0.0232,
        "gold": -0.00621118,
        "cape": 10.75,
        "equities": 0.32464455,
        "inflation": 0.08085106382978724
    },
    "1951": {
        "cpi": 25.4,
        "fixed_income": 0.0257,
        "gold": -0.0325,
        "cape": 11.9,
        "equities": 0.21059264,
        "inflation": 0.04330708661417337
    },
    "1952": {
        "cpi": 26.5,
        "fixed_income": 0.0268,
        "gold": -0.08268734,
        "cape": 12.53,
        "equities": 0.14069161,
        "inflation": 0.0037735849056603765
    },
    "1953": {
        "cpi": 26.6,
        "fixed_income": 0.0283,
        "gold": -0.00704225,
        "cape": 13.01,
        "equities": 0.026356,
        "inflation": 0.011278195488721776
    },
    "1954": {
        "cpi": 26.9,
        "fixed_income": 0.0248,
        "gold": -0.00283688,
        "cape": 12,
        "equities": 0.45548586,
        "inflation": -0.0074349442379182396
    },
    "1955": {
        "cpi": 26.7,
        "fixed_income": 0.0261,
        "gold": 0.00142248,
        "cape": 15.99,
        "equities": 0.28361433,
        "inflation": 0.0037453183520599342
    },
    "1956": {
        "cpi": 26.8,
        "fixed_income": 0.029,
        "gold": 0.00142046,
        "cape": 18.29,
        "equities": 0.06681766,
        "inflation": 0.029850746268656803
    },
    "1957": {
        "cpi": 27.6,
        "fixed_income": 0.0346,
        "gold": 0,
        "cape": 16.72,
        "equities": -0.05664385,
        "inflation": 0.03623188405797095
    },
    "1958": {
        "cpi": 28.6,
        "fixed_income": 0.0309,
        "gold": 0,
        "cape": 13.79,
        "equities": 0.39599537999999995,
        "inflation": 0.013986013986013957
    },
    "1959": {
        "cpi": 29,
        "fixed_income": 0.0402,
        "gold": 0.03546099,
        "cape": 17.98,
        "equities": 0.07491316,
        "inflation": 0.010344827586207028
    },
    "1960": {
        "cpi": 29.3,
        "fixed_income": 0.0472,
        "gold": -0.02739726,
        "cape": 18.34,
        "equities": 0.0612902,
        "inflation": 0.017064846416382284
    },
    "1961": {
        "cpi": 29.8,
        "fixed_income": 0.0384,
        "gold": -0.00422535,
        "cape": 18.47,
        "equities": 0.18916059,
        "inflation": 0.006711409395973034
    },
    "1962": {
        "cpi": 30,
        "fixed_income": 0.0408,
        "gold": -0.00282885,
        "cape": 21.2,
        "equities": -0.02871478,
        "inflation": 0.013333333333333197
    },
    "1963": {
        "cpi": 30.4,
        "fixed_income": 0.0383,
        "gold": 0.00283688,
        "cape": 19.26,
        "equities": 0.2079107,
        "inflation": 0.016447368421052655
    },
    "1964": {
        "cpi": 30.9,
        "fixed_income": 0.0417,
        "gold": 0.00424328,
        "cape": 21.63,
        "equities": 0.15652937,
        "inflation": 0.009708737864077666
    },
    "1965": {
        "cpi": 31.2,
        "fixed_income": 0.0419,
        "gold": -0.0028169,
        "cape": 23.27,
        "equities": 0.1128271,
        "inflation": 0.019230769230769384
    },
    "1966": {
        "cpi": 31.8,
        "fixed_income": 0.0461,
        "gold": 0.00282486,
        "cape": 24.06,
        "equities": -0.06568795,
        "inflation": 0.03459119496855334
    },
    "1967": {
        "cpi": 32.9,
        "fixed_income": 0.0458,
        "gold": 0.22535211,
        "cape": 20.43,
        "equities": 0.15950266000000002,
        "inflation": 0.03647416413373872
    },
    "1968": {
        "cpi": 34.1,
        "fixed_income": 0.0553,
        "gold": -0.05747126,
        "cape": 21.51,
        "equities": 0.10406144,
        "inflation": 0.04398826979472137
    },
    "1969": {
        "cpi": 35.6,
        "fixed_income": 0.0604,
        "gold": -0.05121951,
        "cape": 21.19,
        "equities": -0.08441176,
        "inflation": 0.06179775280898858
    },
    "1970": {
        "cpi": 37.8,
        "fixed_income": 0.0779,
        "gold": 0.14652956,
        "cape": 17.09,
        "equities": 0.0531,
        "inflation": 0.05291005291005302
    },
    "1971": {
        "cpi": 39.8,
        "fixed_income": 0.0624,
        "gold": 0.43139014,
        "cape": 16.46,
        "equities": 0.1768,
        "inflation": 0.03266331658291466
    },
    "1972": {
        "cpi": 41.1,
        "fixed_income": 0.0595,
        "gold": 0.6679198,
        "cape": 17.26,
        "equities": 0.1798,
        "inflation": 0.03649635036496357
    },
    "1973": {
        "cpi": 42.6,
        "fixed_income": 0.0646,
        "gold": 0.72586401,
        "cape": 18.71,
        "equities": -0.1852,
        "inflation": 0.0938967136150235
    },
    "1974": {
        "cpi": 46.6,
        "fixed_income": 0.0699,
        "gold": -0.24204168,
        "cape": 13.53,
        "equities": -0.2839,
        "inflation": 0.11802575107296143
    },
    "1975": {
        "cpi": 52.1,
        "fixed_income": 0.075,
        "gold": -0.03962955,
        "cape": 8.92,
        "equities": 0.3847,
        "inflation": 0.06717850287907878
    },
    "1976": {
        "cpi": 55.6,
        "fixed_income": 0.0774,
        "gold": 0.2043059,
        "cape": 11.19,
        "equities": 0.2659,
        "inflation": 0.05215827338129486
    },
    "1977": {
        "cpi": 58.5,
        "fixed_income": 0.0721,
        "gold": 0.29174426,
        "cape": 11.44,
        "equities": -0.0264,
        "inflation": 0.06837606837606836
    },
    "1978": {
        "cpi": 62.5,
        "fixed_income": 0.0796,
        "gold": 0.99999999,
        "cape": 9.24,
        "equities": 0.0927,
        "inflation": 0.0928
    },
    "1979": {
        "cpi": 68.3,
        "fixed_income": 0.091,
        "gold": 0.29607843,
        "cape": 9.26,
        "equities": 0.2556,
        "inflation": 0.1390922401171304
    },
    "1980": {
        "cpi": 77.8,
        "fixed_income": 0.108,
        "gold": -0.32761809,
        "cape": 8.85,
        "equities": 0.3367,
        "inflation": 0.11825192802056561
    },
    "1981": {
        "cpi": 87,
        "fixed_income": 0.1257,
        "gold": 0.1175,
        "cape": 9.26,
        "equities": -0.0375,
        "inflation": 0.0839080459770114
    },
    "1982": {
        "cpi": 94.3,
        "fixed_income": 0.1459,
        "gold": -0.14988814,
        "cape": 7.39,
        "equities": 0.1871,
        "inflation": 0.03711558854718988
    },
    "1983": {
        "cpi": 97.8,
        "fixed_income": 0.1046,
        "gold": -0.18947368,
        "cape": 8.76,
        "equities": 0.2347,
        "inflation": 0.04192229038854811
    },
    "1984": {
        "cpi": 101.9,
        "fixed_income": 0.1167,
        "gold": 0.06168831,
        "cape": 9.89,
        "equities": 0.0305,
        "inflation": 0.03532875368007837
    },
    "1985": {
        "cpi": 105.5,
        "fixed_income": 0.1138,
        "gold": 0.19541284,
        "cape": 10,
        "equities": 0.3256,
        "inflation": 0.03886255924170601
    },
    "1986": {
        "cpi": 109.6,
        "fixed_income": 0.0919,
        "gold": 0.24456383,
        "cape": 11.72,
        "equities": 0.1609,
        "inflation": 0.014598540145985384
    },
    "1987": {
        "cpi": 111.2,
        "fixed_income": 0.0708,
        "gold": -0.15693731,
        "cape": 14.92,
        "equities": -0.0227,
        "inflation": 0.04046762589928066
    },
    "1988": {
        "cpi": 115.7,
        "fixed_income": 0.0867,
        "gold": -0.02230891,
        "cape": 13.9,
        "equities": 0.1794,
        "inflation": 0.046672428694900514
    },
    "1989": {
        "cpi": 121.1,
        "fixed_income": 0.0909,
        "gold": -0.03690773,
        "cape": 15.09,
        "equities": 0.2917,
        "inflation": 0.052023121387283267
    },
    "1990": {
        "cpi": 127.4,
        "fixed_income": 0.0821,
        "gold": -0.08557742,
        "cape": 17.05,
        "equities": -0.0618,
        "inflation": 0.05651491365777073
    },
    "1991": {
        "cpi": 134.6,
        "fixed_income": 0.0809,
        "gold": -0.05705791,
        "cape": 15.61,
        "equities": 0.3420,
        "inflation": 0.026002971768201988
    },
    "1992": {
        "cpi": 138.1,
        "fixed_income": 0.0703,
        "gold": 0.17642643,
        "cape": 19.77,
        "equities": 0.0897,
        "inflation": 0.03258508327299059
    },
    "1993": {
        "cpi": 142.6,
        "fixed_income": 0.066,
        "gold": -0.02169751,
        "cape": 20.32,
        "equities": 0.1128,
        "inflation": 0.02524544179523147
    },
    "1994": {
        "cpi": 146.2,
        "fixed_income": 0.0575,
        "gold": 0.00978474,
        "cape": 21.41,
        "equities": -0.0006,
        "inflation": 0.028043775649794878
    },
    "1995": {
        "cpi": 150.3,
        "fixed_income": 0.0778,
        "gold": -0.04651163,
        "cape": 20.22,
        "equities": 0.3645,
        "inflation": 0.02727877578176985
    },
    "1996": {
        "cpi": 154.4,
        "fixed_income": 0.0565,
        "gold": -0.22208672,
        "cape": 24.76,
        "equities": 0.2121,
        "inflation": 0.030440414507771907
    },
    "1997": {
        "cpi": 159.1,
        "fixed_income": 0.0658,
        "gold": 0.00574813,
        "cape": 28.33,
        "equities": 0.3129,
        "inflation": 0.015713387806411072
    },
    "1998": {
        "cpi": 161.6,
        "fixed_income": 0.0554,
        "gold": 0.0053689,
        "cape": 32.86,
        "equities": 0.2343,
        "inflation": 0.01670792079207928
    },
    "1999": {
        "cpi": 164.3,
        "fixed_income": 0.0472,
        "gold": -0.06063738,
        "cape": 40.57,
        "equities": 0.2356,
        "inflation": 0.027388922702373808
    },
    "2000": {
        "cpi": 168.8,
        "fixed_income": 0.0666,
        "gold": 0.01412067,
        "cape": 43.77,
        "equities": -0.1089,
        "inflation": 0.037322274881516515
    },
    "2001": {
        "cpi": 175.1,
        "fixed_income": 0.0516,
        "gold": 0.23960217,
        "cape": 36.98,
        "equities": -0.1097,
        "inflation": 0.01142204454597362
    },
    "2002": {
        "cpi": 177.1,
        "fixed_income": 0.0504,
        "gold": 0.21735959,
        "cape": 30.28,
        "equities": -0.2086,
        "inflation": 0.025974025974025983
    },
    "2003": {
        "cpi": 181.7,
        "fixed_income": 0.0405,
        "gold": 0.04397843,
        "cape": 22.9,
        "equities": 0.3164,
        "inflation": 0.019262520638414937
    },
    "2004": {
        "cpi": 185.2,
        "fixed_income": 0.0415,
        "gold": 0.17768595,
        "cape": 27.66,
        "equities": 0.1262,
        "inflation": 0.02969762419006483
    },
    "2005": {
        "cpi": 190.7,
        "fixed_income": 0.0422,
        "gold": 0.23918129,
        "cape": 26.59,
        "equities": 0.0638,
        "inflation": 0.03985317252228637
    },
    "2006": {
        "cpi": 198.3,
        "fixed_income": 0.0442,
        "gold": 0.31587227,
        "cape": 26.47,
        "equities": 0.1577,
        "inflation": 0.020756429652042385
    },
    "2007": {
        "cpi": 202.416,
        "fixed_income": 0.0476,
        "gold": 0.03974895,
        "cape": 27.21,
        "equities": 0.0562,
        "inflation": 0.04280294047901356
    },
    "2008": {
        "cpi": 211.08,
        "fixed_income": 0.0374,
        "gold": 0.2503593,
        "cape": 24.02,
        "equities": -0.3723,
        "inflation": 0.0002984650369528552
    },
    "2009": {
        "cpi": 211.143,
        "fixed_income": 0.0252,
        "gold": 0.30597701,
        "cape": 15.17,
        "equities": 0.2830,
        "inflation": 0.026257086429576137
    },
    "2010": {
        "cpi": 216.687,
        "fixed_income": 0.0373,
        "gold": 0.07797923,
        "cape": 20.53,
        "equities": 0.1716,
        "inflation": 0.01631846857448771
    },
    "2011": {
        "cpi": 220.223,
        "fixed_income": 0.0339,
        "gold": 0.08687133,
        "cape": 22.98,
        "equities": 0.0098,
        "inflation": 0.029252167121508466
    },
    "2012": {
        "cpi": 226.665,
        "fixed_income": 0.0197,
        "gold": -0.27614183,
        "cape": 21.21,
        "equities": 0.1606,
        "inflation": 0.01594864668122553
    },
    "2013": {
        "cpi": 230.28,
        "fixed_income": 0.0191,
        "gold": -0.00435866,
        "cape": 21.9,
        "equities": 0.3307,
        "inflation": 0.015789473684210575
    },
    "2014": {
        "cpi": 233.916,
        "fixed_income": 0.0286,
        "gold": -0.11611424,
        "cape": 24.86,
        "equities": 0.1271,
        "inflation": -0.0008934831306964819
    },
    "2015": {
        "cpi": 233.707,
        "fixed_income": 0.0188,
        "gold": 0.1799434,
        "cape": 26.49229542,
        "equities": 0.0067,
        "inflation": 0.013730868138309926
    },
    "2016": {
        "cpi": 236.916,
        "fixed_income": 0.0209,
        "gold": 0.00510098,
        "cape": 24.2061672,
        "equities": 0.1337,
        "inflation": 0.025000422090529995
    },
    "2017": {
        "cpi": 242.839,
        "fixed_income": 0.0243,
        "gold": 0.00904448,
        "cape": 28.06357374,
        "equities": 0.2099,
        "inflation": 0.020705076202751638
    },
    "2018": {
        "cpi": 247.867,
        "fixed_income": 0.0258,
        "gold": 0.09784074,
        "equities": -0.0527,
        "cape": 33.30734383,
        "inflation": 0.015512351381991252
    },
    "2019": {
        "cpi": 251.712,
        "fixed_income": 0.0271,
        "gold": 0,
        "equities": 0.3102,
        "cape": 28.38016446
    },
    "2020": {
        "cpi": 257.971,
        "fixed_income": 0.0422, // nonsense
        "gold": 0,
        "equities": 0.2218,
        "cape": 30.99
    }
};
