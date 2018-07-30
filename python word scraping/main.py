from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import string



"""
Make a python dict to stringifyed javascript object function
"""



# list of words to find for levels in game
wordsToFind = ['start','adventure','synergy','create','automate','words','test','cowboy','extra','water', 'delicious']


# output to be built up as new words and anagrams are scrapped from web
# output = "["
output = ""

# calculate max length word so can define list of numWordsWithLetters as all zeros
maxLengthWord = 0
for word in wordsToFind:
    if len(word) > maxLengthWord:
        maxLengthWord = len(word) + 1

print(maxLengthWord)
# for each word to find; get all necessary info from web and do calculations then append to output string
for i in range(0, len(wordsToFind)):
    word = wordsToFind[i]
    print(word)
    wordsPossible = []
    numWordsWithLetters = [0]*maxLengthWord
    
    driver = webdriver.Chrome()

    driver.get("http://wordsolver.net/solve#!q="+word+"&type=st_anagram&dic=d_twl&ml=15")
    for elem in driver.find_elements_by_class_name('resultword'):
        wordsPossible.append(elem.text.lower().replace(',',''))

    # tally the number of words with different lengths
    for wordPossible in wordsPossible:
        # ignore anagram word
        if wordPossible == word:
            continue
        numWordsWithLetters[len(wordPossible)] += 1
        print(wordPossible)
        
    driver.close()
    
    output += '{{\"anagram\":\"{}\",\"wordsDone\":[],\"wordsPossible\":{},\"levelNum\":{},\"numWordsWithLetters\":{}}},'.format(
        word, wordsPossible, i, numWordsWithLetters)
    

print(output)










#content = driver.find_element_by_class_name('resultword')
#print(content.text)

"""
elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)
assert "No results found." not in driver.page_source
"""

# http://wordsolver.net/solve#!q=hello&type=st_anagram&dic=d_twl&ml=15
# http://wordsolver.net/solve#!q=small&dic=d_twl&type=st_anagram&ml=15
"""
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.get('http://httpbin.org/get', params=payload)
"""
"""

[{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","tets"],"levelNum":0,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]},
{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","test","tets"],"levelNum":1,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]},
{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","test","tets"],"levelNum":2,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]},
{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","test","tets"],"levelNum":3,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]},
{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","test","tets"],"levelNum":4,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]},
{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","test","tets"],"levelNum":5,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]},
{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","test","tets"],"levelNum":6,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]},
{"anagram":"test","wordsDone":[],"wordsPossible":["es","et","set","tet","sett","stet","test","tets"],"levelNum":7,
"numWordsWithLetters":[0,0,2,2,3],"numWordsToComplete":[0,0,1,1,2]}]




"""
