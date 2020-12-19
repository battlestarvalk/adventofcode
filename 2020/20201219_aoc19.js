const test = ['0: 4 1 5',
'1: 2 3 | 3 2',
'2: 4 4 | 5 5',
'3: 4 5 | 5 4',
'4: "a"',
'5: "b"',
'',
'ababbb',
'bababa',
'abbbab',
'aaabbb',
'aaaabbb']

instructions = test.slice(0,6)
                   .map(function(rules){return rules.split(": ")[1]
                                                    .replace(/[\"]/g, "")});
strings = test.slice(7)
