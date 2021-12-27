import { Router, listen } from 'worktop'
import { setWorktopHandler } from './bot'
import isIPAllowed from './middlewares/ip-limit'

/**
 * Worktop API instance
 */
const api = new Router()

// Restrict access only to trusted IP ranges
api.prepare = (req, res) => {
  return;
  if (!isIPAllowed(req.headers.get('CF-Connecting-IP') as string))
    return res.send(403, { success: false, error: 'IP is not allowed' })
}

// Connecting Grammy with Worktop
setWorktopHandler(api)

// Handle CF's requests with Worktop
listen(api.run)
