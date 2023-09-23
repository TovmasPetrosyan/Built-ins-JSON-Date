function dayOfYear(dateString){   
     const [month, day, year] = dateString.split("/"); 
     const date = new Date(year, month - 1, day);  
     const millisecond = date.getTime() - new Date(year, 0, 1).getTime();
     const dayYear = Math.floor(millisecond / (1000 * 60 * 60 * 24)) + 1;
   return dayYear
}

