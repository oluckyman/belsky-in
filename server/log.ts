import { createLogger, transports, format } from 'winston'

export default createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [
    new transports.Console(),
  ]
})
