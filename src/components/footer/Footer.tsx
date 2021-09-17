import Link from "next/link";

import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

export function Footer() {
	return (
		<>
			<div>Kapcsolat</div>
			<div>
				<Link href="mailto:mbioteche@gmail.com">
					<a>
						<FontAwesomeIcon  icon={faEnvelope} /> mbioteche@gmail.com
					</a>
				</Link>
				<Link href="#">
					<a>
						<FontAwesomeIcon icon={faMapMarkerAlt} /> 1202 Budapest Perczel Mór utca 16.
					</a>
				</Link>
				<Link href="tel:+36703692392">
					<a>
						<FontAwesomeIcon icon={faPhoneAlt} /> +36703692392
					</a>
				</Link>
			</div>
			<div>
				<Link href="#">
					<a>
						<FontAwesomeIcon icon={faFacebookF}/>
					</a>
				</Link>
				<Link href="#">
					<a>
						<FontAwesomeIcon icon={faInstagram}/>
					</a>
				</Link>
				<Link href="#">
					<a>
						<FontAwesomeIcon icon={faLinkedinIn}/>
					</a>
				</Link>
			</div>
		</>
	)
}
