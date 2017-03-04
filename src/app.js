import $ from 'jquery';
import Rx from 'rxjs/Rx';

const numbers = ['2','5','7','1'];

const numberStream$ = Rx.Observable.from(numbers);

numberStream$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log("complete");
  }
);

const posts = [
  { "title": "hello", "id":123 },
  { "title": "hello", "id":123 },
  { "title": "hello", "id":123 }
];

const postStream$ = Rx.Observable.from(posts);

postStream$.subscribe(
  posts => {
    console.log(posts);
    $('#post').append('<li><h3>'+posts.title+'</h3><br><p>'+posts.id+'</p></li>')
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log("completed");
  }
);

const myPromise = new Promise((reslove, reject) => {
  console.log("Creating Promise");
  setTimeout(() => {
    resolve('Hello from promise');
  }, 3000);
});

myPromise.then((result) => {
  console.log(result);
});

const source$ = Rx.Observable.fromPromise(myPromise);
source$.subscribe(x => console.log(x));

function getUser(username) {
  return $.ajax({
    url: 'http://api.github.com/users/'+username,
    dataType: 'jsonp'
  }).promise();
}

const source$ = Rx.Observable.fromEvent($('#input'), 'keyup');
source$.subscribe(e => {
  Rx.Observable.fromPromise(getUser('subbu1125'))
    .subscribe(x => {
      console.log(x);
      $('#name').text(x.data.name);
      $('#blog').text(x.data.email);
      $('#repos').text(x.data.bio);
    });
});

const timeStream$ = Rx.Observable.interval(100)
                        .take(5);

timeStream$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log("completed");
  }
);
const timeStream$ = Rx.Observable.timer(5000, 1000)
                        .take(5);

timeStream$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log("completed");
  }
);

const timeStream$ = Rx.Observable.range(5000, 1000);

timeStream$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log("completed");
  }
);
