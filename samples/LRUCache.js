// LRU (Leaset recently used)
// Q: write logic to remove leaset used item and add the new item
// { name: ajith, location: madurai, state: tn}
// in the above if we add another map property called phone 98989898, it should remove the state: tn
// the new one should look like
// { locaiton: madurai, state: tn, phone 989898989,}

class LRU {
  constructor(max = 1) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    const item = this.cache.get(key);

    if (item) {
      this.cache.delete(key);
      this.set(key, item);
    }
  }

  set(key, value) {
    // check if the prop already exists or  in cache
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // check if the limit is exceeded the max number
    // if yes delete the first item
    if (this.cache.size === this.max) {
      this.cache.delete(this.first());
    }

    this.cache.set(key, value);
  }

  first() {
    return this.cache.keys().next().value;
  }
}

const LruCache = new LRU(3);

LruCache.set("name", "Ajithkumar J M");
LruCache.set("native", "Madurai");
LruCache.set("age", 27);
LruCache.set("work", "IT");
LruCache.get("name");

console.log(LruCache.cache);
