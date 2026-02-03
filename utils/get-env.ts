export function GetEnv(ENV:string) {
  const env = process.env[ENV]

  return env ?? ""
}