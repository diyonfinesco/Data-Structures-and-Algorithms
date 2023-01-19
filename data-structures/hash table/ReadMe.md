## Hash Tables

## Performance 🚀
<pre>
* insert(item)  - O(1)
* Lookup()      - O(1)
* Delete()      - O(1)
</pre>
## When to use 🤔
when we want to lookups for some value


## Notes 📝
* Real world example:
  * Spell checkers
  * Dictionaries
  * Compilers
  * Code editors
* Some programming languages has support Hash Tables but under different names.
  * Java - HashMap
  * JavaScript/TypeScript - Object
  * Python - Dictionary
  * C# - Dictionary
* However what happened if our hash function generates a same index twice? we cannot save two values in same index. which means collision. to solve that problem we can point each index of the array to linked list. this is what we call chaining. second option is to save the value in different index. for that there are few algorithms.
<br />
<br />
* Hash Tables store <b><i>KEY,VALUE</i></b> pair
* Basically in Hash Table, key will pass into hash function and it will gives the address that where should store that data in memory.
* Also when we want to lookup a value, key will pass into hash function and then we can get the address of that data instead of checking every value. 
* Hash Function is  <b><i>Deterministic </i></b> (when we input a value, it will gives the same value).


## Maps vs Sets 🚀
* Maps(K,V) can store duplicate values but Sets(K) does not allow to store duplicates.
* therefore we can use Maps for when we care about counts and we can use Sets when we do not care about counts.