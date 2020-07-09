function deweySearching(dewey, title, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? dewey.length : end;
  
    if (start > end) {
      return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = dewey[index];
  
    for (let i = 0; i < dewey.length; i++) {   
      if (dewey[i] == title) {
        return 'found book'
      } 
    }
    if (item < dewey) {
      return deweySearching(dewey, title, index + 1, end);
    }
    else if (item > dewey) {
      return deweySearching(dewey, title, start, index - 1);
    }
  }

// in order 14 15 19 25 27 35 79 89 90 91
// pre 35 25 15 14 19 27 89 79 91 90
// post 14 19 15 27 25 79 90 91 89 35


//            35
//        /      \
//       25       89
//     /    \     / \   
//    15    27   79  91 
//   /  \            /
// 14    19         90


//post 5 7 6 9 11 10 8
//pre 8 6 5 7 10 9 11             

      //       8
      //   6      10
      // 5   7   9  11
