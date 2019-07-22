export function titleCase(str: string): string {
  return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}

// string literals
// good for limiting the set of things you're dealing with
// eg MIMEtypes
type OS = 'linux' | 'macos' | 'windows' | 'other';

export function sniffOS(nav: Navigator): OS {
  if (/win/i.test(nav.platform)) {
    return 'windows';
  } else if (/mac/i.test(nav.platform)) {
    return 'macos';
  } else if (/linux/i.test(nav.platform)){
    return 'linux';
  } else {
    return 'other';
  }
}

// enums
// the only ts thing that goes to runtime
// can be set up to be checked exhaustively
// similar to string literals but DRYer
export const enum Status {
  Good = 'good',
  Bad = 'bad'
};

export function makeStatusResponse(status: Status): string {
  switch(status) {
    case Status.Good:
      return 'that\'s cool';
    case Status.Bad:
      return 'I\'m sorry';
    default:
      return assertNever(status); // exhaustive pattern matching
  }
}

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

// discriminated unions and adts
const enum NameKind {
  Full = 'full',
  Partial = 'partial',
  Empty = 'empty'
};

interface Full {
  kind: NameKind.Full;
  first: string;
  last: string;
}

interface Partial {
  kind: NameKind.Partial;
  first: string;
}

interface Empty {
  kind: NameKind.Empty;
}

type DisplayName = Full | Partial | Empty;

function makeGreeting(name: DisplayName): string {
  switch(name.kind) {
    case NameKind.Full:
      return `Hello, ${name.first} ${name.last}`;
    case NameKind.Partial:
      return `Hello, ${name.first}`;
    default:
      return 'Hello, you';
  }
}

// structural (almost duck) typing as opposed to nominative typing
function makeName(first: string, last: string): DisplayName {
  let name: DisplayName;

  if (first && last) {
    name = {
      kind: NameKind.Full,
      first,
      last
    };
  } else if (first) {
    name = {
      kind: NameKind.Partial,
      first
    };
  } else {
    name = { kind: NameKind.Empty };
  }

  return name;
}

export const greetUser =
  (first: string, last: string): string => makeGreeting(makeName(first, last));
