const formatDate = (timeInSeconds) => {
  let s = `${timeInSeconds}`;
  let m = 0;
  let h = 0;
  
  if (s < 60) {
    return s + 's';
  }
  else if (s < 3600) {
	m = Math.floor(s/60);
	newS = s - 60*m;
	if (newS === 0) {
	  return m+'m'; 
	}
	else {
      return m+'m '+newS+'s';
    }
  }
  else if (s >= 3600) {
    h = Math.floor(s/3600);
    m = Math.floor((s - 3600*h)/60);
    newS = s - (3600*h+ 60*m);
    if (newS === 0 && m === 0) {
      return h + 'h';
    }
    else if (newS === 0) {
      return h + 'h ' + m+ 'm';
    }
    else if (m === 0) {
      return h + 'h ' + newS+ 's';
    }
    else {
      return h + 'h ' + m+ 'm '+ newS + 's';
    }
  }
  else {
    return '0s';
  }
}

module.exports = formatDate;