<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require __DIR__ . '/vendor/autoload.php';
use sngrl\PhpFirebaseCloudMessaging\Client;
use sngrl\PhpFirebaseCloudMessaging\Message;
use sngrl\PhpFirebaseCloudMessaging\Recipient\Device;
use sngrl\PhpFirebaseCloudMessaging\Notification;

header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: origin, content-type, accept');
header('Content-type: application/json');

$server_key = 'AAAAOi23pxk:APA91bGNxz5rV4p3tyWCy3MNoAGw0QYfEMQIu8w8JNamiqyLVDaj1ONATn4bI7wUYBo7jUHtmdAYRB-j9B-EiDse0NzU5XayXrGvsWU3Npvb-GAwO50C7zDuLCX6AP9COq9pEO3qqdHY';
$client = new Client();
$client->setApiKey($server_key);
$client->injectGuzzleHttpClient(new \GuzzleHttp\Client());

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if (isset($_POST['tokens'])) {
		$message = new Message();
		foreach ($_POST as $token) {
			$message->addRecipient(new Device($token));
		}

		$message->setNotification(new Notification('Hello', 'World'))
		    	->setData(['foo' => 'bar']);

    	$response = $client->send($message);
		var_dump($response->getStatusCode());
	}
}else {
	$message = new Message();
	$message->setPriority('high');
	$message->addRecipient(new Device('fhKLOhk2pmY:APA91bGf_4jmCelmTL951vu68y3wNZ6QLSawQWrVzpBHfhn4knOiN70d4DmgUmdeuj_AuTk7SIp-zPKsuW740fnF6NSdTiQzEVRJ7m41GGKTfFOQAFExCvDHy5Mdw1dTR_xKTkF2nofs'));
	$message
	    ->setNotification(new Notification('Model', 'Model is nu online gekomen'))
	    ->setData(['key' => 'value']);

	$response = $client->send($message);
	var_dump($response->getStatusCode());
	var_dump($response->getBody()->getContents());
}