# Radix Sort

- not comparison sort type algorithm, not checking comparisons between elements

- exploits the fact that information about the size of a number is encoded in the number of digits

- 11 compared to 335, group numbers into buckets based off the right most ending digit

- pull out of buckets in the order they are already stored in and evaluate the 2nd most right digit, or 7 === 07 add a 0 for single digits

- continue process until length of longest number evaluated, if 46392 === 5 length and will have to do process 5 times on all numbers

- average time and space complexity 0(nk) => k meaning length of digits 1267 = 4
