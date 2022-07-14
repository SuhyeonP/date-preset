# This is for me

```typescript
const nowTime = Date.now();
const endTime = end_date.getTime();

const { gap } = getDateGap(endTime, nowTime);
// (dateGap, hourGap, minuteGap, secondGap) > 0

if (gap === 'past') {
  end_date.setDate(end_date.getDate() + 1);
  end_date = dateTimeRest(end_date);
} else if (gap === 'today') {
  end_date = now;
} else {
  end_date = dateTimeRest(end_date);
}
```

### `getDateGap(origin, compare, option)`:

- origin, compare : origin | compare Date (you can use type timeStamp(string), Date)
- option is optional (you can use divide type for `Math.round ` => round)

- you can use `dateGap`, `hourGap`, `minuteGap`, `secondGap`.


### `isSameDate(origin, compare, checkTime)`

- in my lib you cans use date type string | Date
- return data type is only Boolean! `true` will be same date, `false` will be different.
