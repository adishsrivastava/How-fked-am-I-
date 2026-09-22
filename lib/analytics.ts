export type EventName='page_view'|'sgpa_calculated'|'cgpa_calculated'|'target_cgpa_calculated'|'target_marks_calculated';
export function track(event:EventName,meta:Record<string,unknown>={}){try{const key='hfai_analytics';const old=JSON.parse(localStorage.getItem(key)||'[]');old.push({event,meta,at:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(old.slice(-500)));}catch{} }
