import IPCIDR from 'ip-cidr'
import { TRUSTED_IP_RANGES } from '../constants/telegram'

/**
 * List of CIDR ranges' "contains" method checking inclusivness of an IP in the range
 */
const cidrRanges: ((address: string) => boolean)[] = []

// Fullfil cidrRanges from Telegram trusted IP ranges
TRUSTED_IP_RANGES.forEach((cidr) => cidrRanges.push(new IPCIDR(cidr).contains))

/**
 * Checks is an IP address allowed
 * @param ip IP address
 * @returns True if allowed, False if not
 */
export default function isIPAllowed(ip: string) {
  return cidrRanges.some((range) => range(ip))
}
