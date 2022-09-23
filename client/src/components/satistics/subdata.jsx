export const MathsData = {
  datasets: [
    {
      label: 'Toán',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

export const LiterData = {
  datasets: [
    {
      label: 'Văn',
      backgroundColor: '#FFA500'
    }
  ]
};

export const EngData = {
  datasets: [
    {
      label: 'Ngoại Ngữ',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

export const PhyData = {
  datasets: [
    {
      label: 'Vật Lý',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

export const CheData = {
  datasets: [
    {
      label: 'Hóa Học',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

export const BioData = {
  datasets: [
    {
      label: 'Sinh Học',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

export const HisData = {
  datasets: [
    {
      label: 'Lịch Sử',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

export const GeoData = {
  datasets: [
    {
      label: 'Địa Lý',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

export const CivicData = {
  datasets: [
    {
      label: 'GDCD',
      // data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
      backgroundColor: '#FFA500'
    }
  ]
};

fetch('http://localhost8080/api/marks?subject=toán', {
  method: 'GET', //ehe
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    MathsData.labels = mark.split(',');
  });
fetch('http://localhost8080/api/counts?subject=toán', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    MathsData.datasets[0].data = data.split();
  });

fetch('http://localhost8080/api/marks?subject=văn', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    LiterData.labels = mark.split(',');
  });
fetch('http://localhost8080/api/counts?subject=văn', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    LiterData.datasets[0].data = data.split();
  });

fetch('http://localhost8080/api/marks?subject=Anh', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    EngData.labels = mark.split(',');
  });
fetch('http://localhost8080/api/counts?subject=Anh', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    EngData.datasets[0].data = data.split();
  });
fetch('http://localhost8080/api/marks?subject=Lí', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    const score = mark.split(',');
    score.shift();
    PhyData.labels = score;
  });
fetch('http://localhost8080/api/counts?subject=Lí', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    const count = data.split();
    count.shift();
    PhyData.datasets[0].data = data.split();
  });
fetch('http://localhost8080/api/marks?subject=Hoá', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    const score = mark.split(',');
    score.shift();
    CheData.labels = score;
  });
fetch('http://localhost8080/api/counts?subject=Hóa', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    const count = data.split();
    count.shift();
    CheData.datasets[0].data = data.split();
  });
fetch('http://localhost8080/api/marks?subject=Sinh', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    const score = mark.split(',');
    score.shift();
    BioData.labels = score;
  });
fetch('http://localhost8080/api/counts?subject=Sinh', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    const count = data.split();
    count.shift();
    BioData.datasets[0].data = data.split();
  });
fetch('http://localhost8080/api/marks?subject=Sử', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    const score = mark.split(',');
    score.shift();
    HisData.labels = score;
  });
fetch('http://localhost8080/api/counts?subject=Sử', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    const count = data.split();
    count.shift();
    HisData.datasets[0].data = data.split();
  });
fetch('http://localhost8080/api/marks?subject=Địa', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    const score = mark.split(',');
    score.shift();
    GeoData.labels = score;
  });
fetch('http://localhost8080/api/counts?subject=Địa', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    const count = data.split();
    count.shift();
    GeoData.datasets[0].data = data.split();
  });
fetch('http://localhost8080/api/marks?subject=GDCD', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    res.json();
  })
  .then((marks) => {
    const mark = marks.replaceAll('.00', '');
    const score = mark.split(',');
    score.shift();
    CivicData.labels = score;
  });
fetch('http://localhost8080/api/counts?subject=GDCD', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => res.json())
  .then((data) => {
    const count = data.split();
    count.shift();
    CivicData.datasets[0].data = data.split();
  });
