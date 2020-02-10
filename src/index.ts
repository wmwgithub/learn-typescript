type LogType = Array<any> | string | boolean | number | Object
interface Log {
  inHTML(params: LogType, info?: string): void;
}

function bindLi(value: string, info?: string): HTMLLinkElement {
  let ol: HTMLElement = document.getElementById('logInfo') as HTMLElement
  let li = new HTMLLinkElement()
  li.innerHTML = `${info}==>${value}`
  ol.appendChild(li)
  return li
}

class HandleLog implements Log {
  inHTML(params: LogType, info?: string) {
    if (typeof params === 'number') {
      bindLi(`${params}`, info)
    }
  }
}

declare var Log: {
  prototype: Log;
  new(): HandleLog
}

export default Log